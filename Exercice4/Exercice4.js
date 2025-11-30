// Exercice 4 — Multiples de 3 et 5 dans une plage

function classifyRange(min, max) {
	const results = [];
	if (isNaN(min) || isNaN(max)) return ['Entrée invalide'];
	min = Number(min);
	max = Number(max);
	if (min > max) {
		const tmp = min; min = max; max = tmp;
	}

	for (let i = min; i <= max; i++) {
		if (i % 15 === 0) {
			results.push(i + ' → Five&Three');
		} else if (i % 3 === 0) {
			results.push(i + ' → Three');
		} else if (i % 5 === 0) {
			results.push(i + ' → Five');
		} else {
			results.push(i + ' → ' + i);
		}
	}

	return results;
}

function runFromInputs() {
	const min = document.getElementById('minInput').value;
	const max = document.getElementById('maxInput').value;
	const out = document.getElementById('output');
	const lines = classifyRange(min, max);
	if (out) out.textContent = lines.join('\n');
	console.log('Exercice4 results:', lines);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', function() {
		const btn = document.getElementById('runBtn');
		if (btn) btn.addEventListener('click', runFromInputs);
	});
} else {
	const btn = document.getElementById('runBtn');
	if (btn) btn.addEventListener('click', runFromInputs);
}

