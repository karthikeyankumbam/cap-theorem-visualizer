import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Cloud, Database, Network, Split } from 'lucide-react';
import CAPTriangle from './components/CAPTriangle';
import PropertyCard from './components/PropertyCard';
import ExamplesSection from './components/ExamplesSection';
import Footer from './components/Footer';

function App() {
  const [selected, setSelected] = useState<string[]>(['C', 'A', 'P']);
  
  const toggleProperty = (property: string) => {
    if (selected.includes(property)) {
      if (selected.length > 1) { // Prevent deselecting everything
        setSelected(selected.filter(p => p !== property));
      }
    } else {
      if (selected.length < 2) { // Allow selecting up to 2 properties
        setSelected([...selected, property]);
      } else {
        // Replace the first selected property when adding a new one if already at 2
        const newSelected = [...selected];
        newSelected.shift();
        setSelected([...newSelected, property]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <Database className="mr-2 text-indigo-600" /> 
            Understanding the CAP Theorem
          </h1>
          <p className="mt-2 text-gray-600">
            The fundamental trade-offs in distributed database systems
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is the CAP Theorem?</h2>
            <p className="text-gray-600 mb-8">
              The CAP theorem states that a distributed database system can only guarantee 
              <strong className="text-indigo-700"> two out of three</strong> properties simultaneously: 
              Consistency, Availability, and Partition Tolerance.
            </p>
            
            <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-lg mb-8">
              <div className="flex items-center justify-center text-indigo-800 mb-2">
                <AlertTriangle className="mr-2" />
                <span className="font-medium">Key Insight</span>
              </div>
              <p className="text-gray-700">
                In practice, since network partitions are unavoidable in distributed systems,
                you must choose between consistency and availability when partitions occur.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            <PropertyCard 
              title="Consistency"
              icon={<CheckCircle className="h-8 w-8 text-emerald-500" />}
              color="emerald"
              isSelected={selected.includes('C')}
              onClick={() => toggleProperty('C')}
              description="All nodes see the same data at the same time. After any write operation, all subsequent read operations should return the latest value."
              examples={['Atomic operations', 'Immediate replication', 'Strong consistency models']}
            />
            
            <PropertyCard 
              title="Availability"
              icon={<Cloud className="h-8 w-8 text-blue-500" />}
              color="blue"
              isSelected={selected.includes('A')}
              onClick={() => toggleProperty('A')}
              description="Every request to a non-failing node must receive a response, without guarantee that it contains the most recent information."
              examples={['Read from any replica', 'High uptime guarantee', 'No request blocking']}
            />
            
            <PropertyCard 
              title="Partition Tolerance"
              icon={<Split className="h-8 w-8 text-amber-500" />}
              color="amber"
              isSelected={selected.includes('P')}
              onClick={() => toggleProperty('P')}
              description="The system continues to operate even if network partitions occur, causing communication breaks between nodes."
              examples={['Resilience to network failures', 'Distributed across regions', 'Message delivery uncertainty']}
            />
          </div>
        </section>

        <section className="mb-16 flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <CAPTriangle selected={selected} onSelect={toggleProperty} />
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {selected.sort().join('-')} Systems
            </h3>
            {selected.includes('C') && selected.includes('A') && !selected.includes('P') && (
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>CA systems</strong> prioritize consistency and availability but cannot tolerate network partitions.
                </p>
                <p className="text-gray-600">
                  These systems work well in single-datacenter operations but are not truly distributed. 
                  When a partition occurs, the system must either:
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Shut down the non-consistent nodes (sacrificing availability)</li>
                  <li>Accept inconsistency (sacrificing consistency)</li>
                </ul>
                <p className="text-gray-600">
                  Traditional RDBMS like PostgreSQL and MySQL in their default configurations fall into this category.
                </p>
              </div>
            )}
            
            {selected.includes('C') && selected.includes('P') && !selected.includes('A') && (
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>CP systems</strong> prioritize consistency and partition tolerance at the cost of availability.
                </p>
                <p className="text-gray-600">
                  When a partition occurs, these systems will make some nodes unavailable to prevent inconsistent data.
                  They guarantee that the data you read is always consistent, but may not always serve requests.
                </p>
                <p className="text-gray-600">
                  Examples include distributed databases like MongoDB (with majority writes), Google Spanner, 
                  and consensus protocols like Paxos and Raft.
                </p>
              </div>
            )}
            
            {selected.includes('A') && selected.includes('P') && !selected.includes('C') && (
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>AP systems</strong> prioritize availability and partition tolerance but sacrifice consistency.
                </p>
                <p className="text-gray-600">
                  These systems will always return a response, even if it may not be the most recent data.
                  They typically use eventual consistency mechanisms to reconcile data after a partition heals.
                </p>
                <p className="text-gray-600">
                  Examples include NoSQL databases like Apache Cassandra, Amazon DynamoDB, and CouchDB. These systems
                  often provide "eventual consistency" where all nodes will eventually converge to the same state.
                </p>
              </div>
            )}
            
            {selected.length === 3 && (
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>The CAP Trade-off</strong>: According to the CAP theorem, you must choose which property to sacrifice.
                </p>
                <div className="flex items-center justify-center p-4 bg-amber-50 rounded-lg">
                  <Network className="text-amber-600 mr-3" />
                  <p className="text-gray-700">
                    Since network partitions are inevitable in distributed systems, the real choice is between 
                    <span className="font-medium"> consistency (CP) </span> and 
                    <span className="font-medium"> availability (AP)</span>.
                  </p>
                </div>
                <p className="text-gray-600 mt-2">
                  Click on any two properties above to explore the trade-offs.
                </p>
              </div>
            )}
          </div>
        </section>

        <ExamplesSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;