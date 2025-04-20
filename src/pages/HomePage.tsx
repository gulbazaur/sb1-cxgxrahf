import React from 'react';
import { categories } from '../data/categories';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="w-full bg-white py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            OASIS spielersperre
          </h1>
          <p className="text-xl text-gray-600 text-center">
            Das OASIS Spielersperrsystem (Onlineabfrage Spielerstatus) bildet einen Kernbestandteil des deutschen Glücksspielstaatsvertrags 2021 (GlüStV 2021) und dient maßgeblich dem Spielerschutz sowie der Prävention von Spielsucht, indem es eine bundesweit zentrale Datenbank für den Ausschluss gefährdeter Personen von legalen Glücksspielangeboten bereitstellt. Für alle in Deutschland lizenzierten Anbieter – seien es Online-Casinos, Sportwettenanbieter, Spielhallen oder Gaststätten mit Spielautomaten – ist die Anbindung und die Überprüfung des Spielerstatus über OASIS vor der Spielteilnahme verpflichtend vorgeschrieben, um sicherzustellen, dass eingetragene Personen effektiv vom Spiel ausgeschlossen werden. Das System ermöglicht sowohl die freiwillige Selbstsperre durch den Spieler (ab 3 Monaten Dauer) als auch eine Fremdsperre durch Dritte oder Anbieter (mindestens 1 Jahr), wobei die Aufhebung einer Sperre stets einen formellen Antrag nach Ablauf der Mindestdauer erfordert und nicht automatisch erfolgt, was die Wichtigkeit des verantwortungsbewussten Spielens im regulierten Markt unterstreicht und die Notwendigkeit umfassender Informationen über Funktionsweise, Verfahren und Hintergründe von OASIS für Spieler und Interessierte betont.
          </p>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Wissensdatenbank
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {category.icon}
                <h2 className="ml-2 text-xl font-semibold text-gray-900">{category.name}</h2>
              </div>
              <p className="text-gray-600 mb-4">
                {category.name === 'OASIS Sperren lassen Online' && 'Beschreibung'}
                {category.name === 'OASIS Spielersperre Aufheben' && 'Beschreibung'}
                {category.name === 'OASIS Sperre auch Im Ausland' && 'Beschreibung'}
              </p>
              <ul className="space-y-2">
                {category.subcategories.map((sub) => (
                  <li key={sub}>
                    <Link 
                      to={`/category/${category.name.toLowerCase()}/${sub.toLowerCase()}`}
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 py-12">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Expand Your Knowledge
          </h2>
          <p className="text-white text-opacity-90 text-center">
            Werden Sie Teil unserer Gemeinschaft von Lernenden und Enthusiasten. Entdecken Sie ausführliche Artikel, Leitfäden 
 und Ressourcen in allen Kategorien.
          </p>
        </div>
      </div>
    </main>
  );
}
