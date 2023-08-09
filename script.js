// Add your custom JavaScript code here

// Access the login form element
const loginForm = document.getElementById('loginForm');

// Add event listener to the form submission
loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform a basic validation (you can add more advanced validation)
  if (username === 'admin' && password === 'adminpass') {
    // Redirect to admin page
    window.location.href = 'admin.html';
  } else if (username === 'user' && password === 'userpass') {
    // Redirect to user page
    window.location.href = 'user.html';
  } else {
    alert('Invalid credentials. Please try again.');
  }
});

//for admin
const addDishForm = document.getElementById('addDishForm');

addDishForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const dishName = document.getElementById('dishName').value;
  const dishImage = document.getElementById('dishImage').value;
  const dishPrice = document.getElementById('dishPrice').value;
  console.log(`New Dish Added - Name: ${dishName}, Image: ${dishImage}, Price: ${dishPrice}`);

  alert(`Dish "${dishName}" added to the menu!`);
  addDishForm.reset(); 
});
// Sample menu items data (replace with actual data)
const menuItems = [
    { name: 'Burger', image: 'burger.jpg', price: 10.99 },
    { name: 'Pizza', image: 'pizza.jpg', price: 12.99 },
    { name: 'Pasta', image: 'pasta.jpg', price: 8.99 },
  ];
  
  // Function to generate menu item cards
  function generateMenuItemCard(menuItem) {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
      <div class="card">
        <img src="images/${menuItem.image}" class="card-img-top" alt="${menuItem.name}">
        <div class="card-body">
          <h5 class="card-title">${menuItem.name}</h5>
          <p class="card-text">Price: $${menuItem.price.toFixed(2)}</p>
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    `;
    return card;
  }
  
  // Populate menu items on the page
  const menuItemsContainer = document.getElementById('menuItems');
  menuItems.forEach((menuItem) => {
    const menuItemCard = generateMenuItemCard(menuItem);
    menuItemsContainer.appendChild(menuItemCard);
  });
  
