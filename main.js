// Sample skin data
const SKINS = [
  {
    name: "AK-47 | Asiimov",
    price: 45.50,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    wear: "Factory New"
  },
  {
    name: "M4A4 | Neo-Noir",
    price: 32.75,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    wear: "Minimal Wear"
  },
  {
    name: "AWP | Dragon Lore",
    price: 1420.00,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    wear: "Field-Tested"
  },
  {
    name: "Desert Eagle | Blaze",
    price: 245.30,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    wear: "Factory New"
  }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Render skins
  renderSkins();
  
  // Setup modal functionality
  setupModal();
});

// Render skins in the grid
function renderSkins() {
  const skinsGrid = document.getElementById('skinsGrid');
  if (!skinsGrid) return;

  SKINS.forEach(skin => {
    const skinCard = createSkinCard(skin);
    skinsGrid.appendChild(skinCard);
  });
}

// Create a skin card element
function createSkinCard(skin) {
  const card = document.createElement('div');
  card.className = 'skin-card';
  
  card.innerHTML = `
    <img src="${skin.image}" alt="${skin.name}" class="skin-image">
    <div class="skin-info">
      <h3 class="skin-name">${skin.name}</h3>
      <div class="skin-details">
        <span>${skin.wear}</span>
        <span>$${skin.price.toFixed(2)}</span>
      </div>
    </div>
  `;
  
  return card;
}

// Setup modal functionality
function setupModal() {
  const modal = document.getElementById('loginModal');
  const loginBtn = document.getElementById('loginBtn');
  const loginForm = document.getElementById('loginForm');

  // Open modal
  loginBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  // Close modal when clicking outside
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Handle form submission
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Here you would typically handle the login logic
    console.log('Login attempted:', { username, password });
    
    // Close the modal
    modal.style.display = 'none';
    loginForm.reset();
  });
}