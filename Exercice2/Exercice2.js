// Exercice 2 — Manipulation de chaînes et concaténation

// 1) Déclarer les variables
let prenom = "Sara";
let age = 22;

// 2) Construire la phrase sans la recréer complètement plus tard
// Utiliser une partie intermédiaire (base) puis ajouter l'âge
const base = `Je m'appelle ${prenom} et j'ai `; // partie fixe
let phrase = base + age + ' ans';

// Afficher dans la console
console.log('Phrase initiale :', phrase);

// Fonction pour afficher dans la page
function render() {
	const out = document.getElementById('output');
	if (!out) return;
	const lines = [];
	lines.push("Phrase initiale :");
	lines.push('  ' + phrase);
	lines.push('');
	lines.push('Explication :');
	lines.push('  - On utilise une variable intermédiaire `base` pour la partie fixe');
	lines.push('  - On modifie seulement `age` et on reconstruit la phrase avec `base`');
	out.textContent = lines.join('\n');
}

// 3) Modifier l'âge en 23 sans recréer toute la chaîne (on réutilise `base`)
function setAge(newAge) {
	age = newAge;
	phrase = base + age + ' ans';
	console.log('Age modifié en', age, '→ nouvelle phrase :', phrase);
	render();
}

// Liaison du bouton et exécution initiale
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', function() {
		render();
		const btn = document.getElementById('changeAgeBtn');
		if (btn) btn.addEventListener('click', function() { setAge(23); });
	});
} else {
	render();
	const btn = document.getElementById('changeAgeBtn');
	if (btn) btn.addEventListener('click', function() { setAge(23); });
}

