import { Navigation } from "@/components/Navigation";

const SAMPLE_HISTORY = [
  {
    id: 1,
    item: "AK-47 | Asiimov",
    price: 45.50,
    type: "Purchase",
    date: "2024-02-20",
  },
  {
    id: 2,
    item: "M4A4 | Neo-Noir",
    price: 32.75,
    type: "Sale",
    date: "2024-02-19",
  },
];

const History = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto pt-24 px-4">
        <h1 className="text-3xl font-bold text-white mb-8">Transaction History</h1>
        
        <div className="bg-card rounded-lg border border-gray-700 overflow-hidden">
          <table className="w-full">
            <thead className="bg-background">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Item</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {SAMPLE_HISTORY.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 text-sm text-gray-300">{transaction.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{transaction.item}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      transaction.type === "Purchase" ? "bg-green-900 text-green-200" : "bg-red-900 text-red-200"
                    }`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">${transaction.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default History;