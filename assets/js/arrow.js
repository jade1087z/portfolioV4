    const icon = document.querySelector('.icon');
    const arrow = document.querySelector('.arrow');

    arrow.animate([
    {left: '0' },
    {left: '5px' },
    {left: '0' }
    ], {
        duration: 700,
    iterations: Infinity
    });
