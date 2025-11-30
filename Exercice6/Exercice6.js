// Exercice 6 — Somme des nombres pairs et impairs entre 1 et 50

function calculerSommes() {
  let sommePairs = 0;
  let sommeImpairs = 0;

  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) sommePairs += i;
    else sommeImpairs += i;
  }

  return { paire: sommePairs, impaire: sommeImpairs };
}

function run() {
  const res = calculerSommes();
  const out = document.getElementById('output');
  const lines = [];
  lines.push('Somme des nombres pairs entre 1 et 50 : ' + res.paire);
  lines.push('Somme des nombres impairs entre 1 et 50 : ' + res.impaire);

  if (out) out.textContent = lines.join('\n');
  console.log(lines.join('\n'));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('runBtn');
    if (btn) btn.addEventListener('click', run);
  });
} else {
  const btn = document.getElementById('runBtn');
  if (btn) btn.addEventListener('click', run);
}
