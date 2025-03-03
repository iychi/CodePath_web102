import Card from './Card';

function CardList() {
    const dogs = [
        { name: 'Triscuit',
            description: 'Small Cross Breed Mix / Female / 5.4 lbs',
            link: 'https://www.hssv.org/animals/239985/triscuit',
            img_link:'https://i0.wp.com/www.hssv.org/wp-content/uploads/2025/03/110382384.jpg?fit=450%2C600&ssl=1'},
        { name: 'Yazzy',
            description: 'Medium Cross Breed Mix / Female / 35 lbs',
            link: 'https://www.hssv.org/animals/239177/yazzy',
            img_link:'https://i0.wp.com/www.hssv.org/wp-content/uploads/2025/02/201087498.jpg?fit=600%2C549&ssl=1' },
        { name: 'Feta', 
            description: 'Medium Cross Breed Mix / Female / 5.29 lbs', 
            link: 'https://www.hssv.org/animals/239187/feta/',
            img_link:'https://i0.wp.com/www.hssv.org/wp-content/uploads/2025/02/928481548.jpg?fit=600%2C551&ssl=1' },
        { name: 'Brie', 
            description: 'Medium Cross Breed Mix / Female / 4.94 lbs', 
            link: 'https://www.hssv.org/animals/239537/brie/',
            img_link:'https://i0.wp.com/www.hssv.org/wp-content/uploads/2025/03/1986346846.jpg?fit=600%2C834&ssl=1' },
        { name: 'Gouda', 
            description: 'Medium Cross Breed Mix / Female / 4.89 lbs', 
            link: 'https://www.hssv.org/animals/239546/gouda/',
            img_link:'https://i0.wp.com/www.hssv.org/wp-content/uploads/2025/02/88629438.jpg?fit=600%2C1022&ssl=1' },
        { name: 'Tessie', 
            description: 'Small Cross Breed Mix / Female / 10.89 lbs', 
            link: 'https://www.hssv.org/animals/239456/tessie/',
            img_link:'https://i0.wp.com/www.hssv.org/wp-content/uploads/2025/03/1002601398.jpg?fit=600%2C924&ssl=1' },
        { name: 'Molly', 
            description: 'Small Cross Breed Mix / Female / 10.45 lbs', 
            link: 'https://www.hssv.org/animals/240002/molly/',
            img_link:'https://i0.wp.com/www.hssv.org/wp-content/uploads/2025/03/1586873997.jpg?fit=600%2C853&ssl=1' },
        { name: 'Cheddar', 
            description: 'Medium Cross Breed Mix / Female / 4.97 lbs', 
            link: 'https://www.hssv.org/animals/239768/cheddar/',
            img_link:'https://i0.wp.com/www.hssv.org/wp-content/uploads/2025/03/2129131655.jpg?fit=600%2C655&ssl=1' },
        { name: 'Eesha', 
            description: 'Medium Cross Breed Mix / Female / 9 lbs', 
            link: 'https://www.hssv.org/animals/239608/eesha/',
            img_link:'https://i0.wp.com/www.hssv.org/wp-content/uploads/2025/03/1899506884.jpg?fit=600%2C810&ssl=1' },
        { name: 'Rowan', 
            description: 'Small Cross Breed Mix / Female / 10.98 lbs', 
            link: 'https://www.hssv.org/animals/238008/rowan/',
            img_link:'https://i0.wp.com/www.hssv.org/wp-content/uploads/2025/03/1174339897.jpg?fit=600%2C737&ssl=1' },
    ];

    return (
        <div className="card-list">
            {dogs.map((dog, index) => (
                <Card
                    key={index}
                    name={dog.name}
                    imgLink={dog.img_link}
                    description={dog.description}
                    link={dog.link}
                />
            ))}
        </div>
    );
}

export default CardList;
