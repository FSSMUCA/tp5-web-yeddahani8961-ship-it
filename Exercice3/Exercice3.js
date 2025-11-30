// Exercice 3 — Condition imbriquée : classification d'un nombre

function classifyNumber(n) {
	// n expected to be a Number (can be NaN)
	if (isNaN(n)) return "Entrée invalide";

	if (n < 0) return "Nombre négatif";

	// n >= 0
	if (n > 100) return "Très grand";

	if (n > 50) return "Grand";

	// 0 <= n <= 50
	if (n >= 11 && n <= 50) return "Moyen";

	// 0 <= n <= 10
	return "Petit";
}

function askAndShow() {
	const raw = prompt("Entrez un nombre :");
	if (raw === null) return; // utilisateur a annulé

	const n = Number(raw);
	const result = classifyNumber(n);

	console.log('Valeur saisie:', raw, '→', result);

	const out = document.getElementById('output');
	if (out) {
		out.textContent = `Valeur saisie : ${raw}\nRésultat : ${result}`;
	}
}

// Liaison du bouton
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', function() {
		const btn = document.getElementById('askBtn');
		if (btn) btn.addEventListener('click', askAndShow);
	});
} else {
	const btn = document.getElementById('askBtn');
	if (btn) btn.addEventListener('click', askAndShow);
}

