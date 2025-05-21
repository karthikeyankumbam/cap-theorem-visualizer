import React from 'react';
import { Database } from 'lucide-react';

const ExamplesSection: React.FC = () => {
  const examples = [
    {
      type: 'CP Systems',
      description: 'Prioritize consistency and partition tolerance',
      databases: [
        {
          name: 'MongoDB',
          details: 'With majority write concern setting',
          consistency: 'Strong consistency with primary node',
          availability: 'Some operations may be unavailable during partitions',
          partitionTolerance: 'Continues operating during network partitions'
        },
        {
          name: 'Google Spanner',
          details: 'Uses TrueTime API and Paxos consensus',
          consistency: 'Strong global consistency with atomic clocks',
          availability: 'May reject writes during partitions',
          partitionTolerance: 'Designed for geo-distributed operations'
        }
      ]
    },
    {
      type: 'AP Systems',
      description: 'Prioritize availability and partition tolerance',
      databases: [
        {
          name: 'Apache Cassandra',
          details: 'Multi-master with eventual consistency',
          consistency: 'Eventually consistent with tunable consistency levels',
          availability: 'Highly available, always accepts writes',
          partitionTolerance: 'Designed for partitioned environments'
        },
        {
          name: 'Amazon DynamoDB',
          details: 'NoSQL with multi-region replication',
          consistency: 'Eventually consistent (default) with optional strong consistency',
          availability: 'Highly available design with SLA guarantees',
          partitionTolerance: 'Handles partitions with conflict resolution'
        }
      ]
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Database Examples</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {examples.map((category, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
              <h3 className="text-lg font-medium text-gray-800">{category.type}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
            
            <div className="p-6 space-y-6">
              {category.databases.map((db, index) => (
                <div key={index} className="pb-5 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="flex items-center mb-3">
                    <Database className="h-5 w-5 text-indigo-500 mr-2" />
                    <h4 className="font-semibold text-gray-800">{db.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{db.details}</p>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-emerald-50 rounded p-2">
                      <p className="font-medium text-emerald-700">Consistency</p>
                      <p className="text-gray-600 mt-1">{db.consistency}</p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="font-medium text-blue-700">Availability</p>
                      <p className="text-gray-600 mt-1">{db.availability}</p>
                    </div>
                    <div className="bg-amber-50 rounded p-2">
                      <p className="font-medium text-amber-700">Partition Tolerance</p>
                      <p className="text-gray-600 mt-1">{db.partitionTolerance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExamplesSection;