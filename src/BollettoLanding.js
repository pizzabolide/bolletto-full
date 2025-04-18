export default function BollettoLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-white to-blue-100 text-black p-8 font-sans">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-800 leading-tight">
          La tua bolletta può parlarti.
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700">
          Bolletto legge la tua bolletta, controlla i prezzi ARERA e ti dice se ti spetta un rimborso. Gratis e in 2 minuti.
        </p>
        <form className="mb-6 bg-white p-6 rounded-2xl shadow-xl max-w-xl mx-auto">
          <input
            type="file"
            accept="application/pdf,image/*"
            className="block w-full mb-4 text-sm text-gray-600"
          />
          <input
            type="email"
            placeholder="Inserisci la tua email"
            className="w-full p-3 rounded-xl border border-gray-300 mb-4"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg shadow-md hover:bg-blue-700 transition">
            📤 Analizza la mia bolletta
          </button>
        </form>
      </div>

      {/* Come funziona */}
      <div className="max-w-5xl mx-auto py-16">
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-700">Come funziona</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-5xl mb-4">📄</div>
            <p className="font-medium">1. Carichi la bolletta</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-5xl mb-4">🧠</div>
            <p className="font-medium">2. Bolletto analizza i tuoi dati</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-5xl mb-4">⚖️</div>
            <p className="font-medium">3. Confronta con le tariffe ARERA</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-5xl mb-4">📩</div>
            <p className="font-medium">4. Ti genera il reclamo da inviare</p>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-blue-800">Già rimborsati oltre 3.200€</h3>
          <p className="italic text-lg text-gray-700">
            "Mi hanno restituito 78€ senza che muovessi un dito. Grazie Bolletto!"
          </p>
          <p className="italic mt-4 text-lg text-gray-700">
            "Era ora che qualcuno difendesse i consumatori."
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="max-w-3xl mx-auto text-center py-20">
        <h2 className="text-4xl font-bold mb-6 text-blue-800">Non lasciare soldi in mano ai fornitori</h2>
        <p className="text-xl mb-8 text-gray-700">Carica ora la tua bolletta e scopri se ti spetta un rimborso.</p>
        <form className="bg-white p-6 rounded-2xl shadow-xl max-w-xl mx-auto">
          <input
            type="file"
            accept="application/pdf,image/*"
            className="block w-full mb-4 text-sm text-gray-600"
          />
          <input
            type="email"
            placeholder="Inserisci la tua email"
            className="w-full p-3 rounded-xl border border-gray-300 mb-4"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg shadow-md hover:bg-blue-700 transition">
            📤 Analizza la mia bolletta
          </button>
        </form>
      </div>
    </div>
  );
}
