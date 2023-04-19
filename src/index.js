fetch('https://pixabay.com/api/?key=35556462-a8d5565fa0c9d2dfbbf17af0f&q=yellow+flowers&image_type=photo').then(r => {
    return response.json();
}).then(flowers => {
    console.log(flowers);
});
