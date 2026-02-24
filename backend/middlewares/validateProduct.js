// Product validation middleware
export const validateProduct = (req, res, next) => {
  const { name, price } = req.body;
  
  // Check if name exists and is a string
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ 
      error: 'Product name is required and must be a non-empty string' 
    });
  }
  
  // Check if price exists and is a valid number
  if (price === undefined || price === null) {
    return res.status(400).json({ 
      error: 'Product price is required' 
    });
  }
  
  if (isNaN(price) || Number(price) <= 0) {
    return res.status(400).json({ 
      error: 'Product price must be a positive number' 
    });
  }
  
  // Sanitize the data
  req.body.name = name.trim();
  req.body.price = Number(price);
  
  next();
};

export default validateProduct;
