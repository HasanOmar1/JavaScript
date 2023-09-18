let color = 'yellow';

color = color.toUpperCase();

switch(color){
    
    case 'YELLOW':
    case 'PINK':
    case 'ORANGE':
        console.log(`light color`);
        break;

    case 'BLUE':
    case 'PURPLE':
    case 'BROWN':
        console.log('dark color');
        break;

    default:
        console.log(`Unknown Color`);
                                           

}