// Exercice 10 — Comparaison itératif vs récursif

// Version 1 : Itérative (boucle)
function sommeIterative(n) {
  let somme = 0;
  for (let i = 1; i <= n; i++) {
    somme += i;
  }
  return somme;
}

// Version 2 : Récursive
function sommeRecursive(n) {
  if (n === 0) return 0;
  return n + sommeRecursive(n - 1);
}

function executeAndCompare() {
  const nStr = document.getElementById('nInput').value;
  const n = Number(nStr);

  if (isNaN(n) || n < 1 || !Number.isInteger(n)) {
    alert('Entrée invalide : saisissez un entier >= 1.');
    return;
  }

  if (n > 50000) {
    alert('⚠️ Attention : les grands nombres peuvent causer un débordement de pile avec la récursion.');
  }

  // Calcul itératif
  const t1Iter = performance.now();
  const resultIter = sommeIterative(n);
  const t2Iter = performance.now();
  const timeIter = (t2Iter - t1Iter).toFixed(4);

  // Calcul récursif (avec gestion d'erreur)
  let resultRecur = '?';
  let timeRecur = '?';
  try {
    const t1Recur = performance.now();
    resultRecur = sommeRecursive(n);
    const t2Recur = performance.now();
    timeRecur = (t2Recur - t1Recur).toFixed(4);
  } catch (e) {
    resultRecur = 'ERREUR : Stack overflow';
    timeRecur = '—';
  }

  // Affichage itératif
  const iterOut = document.getElementById('iterOutput');
  if (iterOut) {
    iterOut.textContent = `Somme de 1 à ${n} :\n${resultIter}\n\nTemps : ${timeIter} ms`;
  }

  // Affichage récursif
  const recurOut = document.getElementById('recurOutput');
  if (recurOut) {
    recurOut.textContent = `Somme de 1 à ${n} :\n${resultRecur}\n\nTemps : ${timeRecur} ms`;
  }

  // Affichage de l'analyse
  displayAnalysis(n, resultIter, resultRecur, timeIter, timeRecur);

  console.log('Exercice 10 - Comparaison:');
  console.log('  Itératif:', resultIter, 'en', timeIter, 'ms');
  console.log('  Récursif:', resultRecur, 'en', timeRecur, 'ms');
}

function displayAnalysis(n, resultIter, resultRecur, timeIter, timeRecur) {
  const analysisOut = document.getElementById('analysis');
  if (!analysisOut) return;

  const lines = [];
  lines.push('ANALYSE DE LA COMPARAISON');
  lines.push('========================\n');

  lines.push('1️⃣  LISIBILITÉ :');
  lines.push('   • Itératif : très lisible, boucle simple et directe');
  lines.push('   • Récursif : élégant mais moins intuitif pour les débutants');
  lines.push('   ➜ Gagnant : Itératif (pour la plupart des cas)\n');

  lines.push('2️⃣  PERFORMANCE :');
  if (timeIter !== '?' && timeRecur !== '?') {
    const ratio = (parseFloat(timeRecur) / parseFloat(timeIter)).toFixed(2);
    lines.push(`   • Itératif : ${timeIter} ms`);
    lines.push(`   • Récursif : ${timeRecur} ms`);
    lines.push(`   • Ratio (Récursif / Itératif) : ${ratio}x`);
    if (parseFloat(timeRecur) > parseFloat(timeIter)) {
      lines.push('   ➜ Gagnant : Itératif (plus rapide)');
    }
  } else {
    lines.push('   ➜ La récursion a échoué (stack overflow)');
  }
  lines.push('');

  lines.push('3️⃣  PROBLÈMES DE LA RÉCURSION :');
  lines.push('   • Stack Overflow : dépassement de la pile d\'appels');
  lines.push('   • Plus lent : surcoût dû aux appels de fonction');
  lines.push('   • Limite pratique : ~5000-10000 pour JavaScript');
  lines.push(`   • Pour n=${n} : ${resultRecur === 'ERREUR : Stack overflow' ? '❌ DÉBORDEMENT' : '✓ OK'}`);
  lines.push('');

  lines.push('4️⃣  QUAND PRIVILÉGIER UNE BOUCLE ? :');
  lines.push('   ✓ Calculs simples et répétitifs (somme, produit)');
  lines.push('   ✓ Parcours de tableaux/listes');
  lines.push('   ✓ Quand la performance est critique');
  lines.push('   ✓ Pour éviter les débordements de pile');
  lines.push('');

  lines.push('5️⃣  QUAND PRIVILÉGIER LA RÉCURSION ? :');
  lines.push('   ✓ Structures de données récursives (arbres, graphes)');
  lines.push('   ✓ Problèmes naturellement récursifs (diviser/conquérir)');
  lines.push('   ✓ Clarté du code pour les petites données');
  lines.push('   ✗ Pas pour les calculs simples !');

  analysisOut.textContent = lines.join('\n');
}

function bindUI() {
  const iterBtn = document.getElementById('iterBtn');
  const recurBtn = document.getElementById('recurBtn');
  if (iterBtn) iterBtn.addEventListener('click', executeAndCompare);
  if (recurBtn) recurBtn.addEventListener('click', executeAndCompare);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bindUI);
} else {
  bindUI();
}
