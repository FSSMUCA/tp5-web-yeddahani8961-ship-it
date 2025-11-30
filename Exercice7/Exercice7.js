// Exercice 7 — Fonction : validation d'un mot de passe

function verifierMotDePasse(mdp) {
  if (typeof mdp !== 'string') return false;
  if (mdp.length < 8) return false;
  if (!mdp.includes('@')) return false;
  return true;
}

function checkAndDisplay(mdp) {
  const valid = verifierMotDePasse(mdp);
  const out = document.getElementById('output');
  const message = valid ? 'Mot de passe valide' : 'Mot de passe non valide';
  if (out) out.textContent = message;
  console.log('Mot de passe testé:', mdp, '→', message);
}

function bindUI() {
  const btn = document.getElementById('checkBtn');
  const input = document.getElementById('pwdInput');
  if (btn && input) {
    btn.addEventListener('click', function() {
      checkAndDisplay(input.value);
    });
  }

  // Optionnel : demander via prompt()
  const promptBtn = document.createElement('button');
  promptBtn.textContent = 'Demander via prompt()';
  promptBtn.style.marginLeft = '8px';
  promptBtn.addEventListener('click', function() {
    const mdp = prompt('Entrez un mot de passe :');
    if (mdp !== null) checkAndDisplay(mdp);
  });
  if (btn && btn.parentNode) btn.parentNode.appendChild(promptBtn);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bindUI);
} else {
  bindUI();
}
