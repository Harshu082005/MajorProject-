const sampleListings = [
  {
    title: 'Cozy Beachfront Cottage',
    description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image:{
      filename: 'listingimage',
      url: 'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=600'},
    price: 1500,
    location: 'Malibu',
    country: 'United States'
   
  },
  {
    title: 'Modern Downtown Apartment',
    description: 'Stay in the heart of the city in this sleek, modern apartment. Walk to top attractions, restaurants, and entertainment venues.',
    image:{
      filename: 'listingimage',
      url:'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600'
    }, 
    price: 25000,
    location: 'New York',
    country: 'United States'
   
  },
  {
    title: 'Rustic Mountain Cabin',
    description: 'Enjoy a peaceful retreat in this rustic mountain cabin. Perfect for hiking enthusiasts and those seeking tranquility in nature.',
    image: {
        filename: 'listingimage',
        url:'https://images.pexels.com/photos/261411/pexels-photo-261411.jpeg?auto=compress&cs=tinysrgb&w=600'},
    price: 12000,
    location: 'Aspen',
    country: 'United States'

  },
  {
    title: 'Luxury Villa with Private Pool',
    description: 'Experience ultimate luxury in this villa with a private pool and stunning views. Ideal for a high-end vacation with friends or family.',
    image: {
        filename: 'listingimage',
        url:'https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&w=600'},
    price: 50000,
    location: 'Ibiza',
    country: 'Spain'
    
  },
  {
    title: 'Charming Countryside Farmhouse',
    description: 'Immerse yourself in rural charm with this spacious farmhouse. Enjoy fresh air, open spaces, and a taste of country living.',
    image:{
      filename: 'listingimage',
    url: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=600'},
    price: 18000,
    location: 'Kentucky',
    country: 'United States'
  
  },
  {
    title: 'Elegant City Loft',
    description: 'Experience urban sophistication in this elegant city loft. Ideal for business travelers and city explorers alike.',
    image:{
      filename: 'listingimage',
      url: 'https://images.pexels.com/photos/1167021/pexels-photo-1167021.jpeg?auto=compress&cs=tinysrgb&w=600'},
    price: 30000,
    location: 'San Francisco',
    
    country: 'United States'
    

  },
  {
    title: 'Tropical Island Bungalow',
    description: 'Relax in this tropical island bungalow surrounded by lush vegetation and turquoise waters. Perfect for a serene escape.',
    image: {  filename: 'listingimage',
      url:'https://images.pexels.com/photos/274249/pexels-photo-274249.jpeg?auto=compress&cs=tinysrgb&w=600'},
    price: 20000,
    location: 'Bora Bora',
    country: 'French Polynesia'
    
  }
];

module.exports = { data: sampleListings };