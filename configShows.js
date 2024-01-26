// const sqlite3 = require('sqlite3').verbose();
const sql = require('better-sqlite3')

const db = sql('Data.db');

const data = [
    {
        title: 'The Super Mario Bros. Movie',
        slug: 'The-Super-Mario-Bros-Movie',
        cast: 'Chris Pratt Anya Taylor-Joy Charlie Day',
        rating: 'PG',
        year: '2023',
        length: '1h 32m',
        audience: 'Kids',
        description: 'Magically teleported from Brooklyn to the Mushroom Kingdom, two plucky plumbers team up with a princess to battle a tyrannical fire-breathing turtle.',
        imageCard: 'mario-card.jpg',
        imageBg: 'mario-bg.jpg',
        imageIcon: 'mario-icon.png'
    },
    {
        title: 'Lift',
        slug: 'Lift',
        cast: 'Kevin Hart Gugu Mbatha-Raw Vincent DOnofrio',
        rating: 'PG-13',
        year: '2024',
        length: '1h 46m',
        audience: 'Action',
        description: 'A professional thief and his expert crew attempt the ultimate heist: stealing $500 million in gold from a vault on a plane — 40,000 feet in the air.',
        imageCard: 'lift-card.jpg',
        imageBg: 'lift-bg.jpg',
        imageIcon: 'lift-icon.png'
    },
    {
        title: 'Leo',
        slug: 'Leo',
        cast: 'Adam Sandler Bill Burr Cecily Strong',
        rating: 'PG',
        year: '2023',
        length: '1h 46m',
        audience: 'Kids',
        description: 'Adam Sandler is a lizard named Leo in this coming-of-age musical comedy about the last year of elementary school as seen through the eyes of a class pet.',
        imageCard: 'leo-card.jpg',
        imageBg: 'leo-bg.jpg',
        imageIcon: 'leo-icon.png'
    },
    {
        title: 'Trolls',
        slug: 'Trolls',
        cast: 'Anna Kendrick Justin Timberlake Russell Brand',
        rating: 'PG',
        year: '2016',
        length: '1h 32m',
        audience: 'Kids',
        description: 'When their fellow Trolls are captured by hungry Bergens, upbeat Princess Poppy and her grouchy pal Branch embark on the adventure of a lifetime.',
        imageCard: 'trolls-card.jpg',
        imageBg: 'trolls-bg.jpg',
        imageIcon: 'trolls-icon.png'
    },
    {
        title: 'Minions',
        slug: 'Minions',
        cast: 'Sandra Bullock Jon Hamm Michael Keaton',
        rating: 'PG-13',
        year: '2015',
        length: '1h 30m',
        audience: 'Kids',
        description: 'Travel back in time with Kevin, Stuart and Bob in this prequel that follows the Minions as they try to win the favor of supervillain Scarlet Overkill.',
        imageCard: 'minions-card.jpg',
        imageBg: 'minions-bg.jpg',
        imageIcon: 'minions-icon.png'
    },
    {
        title: 'The Equalizer 3',
        slug: 'The-Equalizer-3',
        cast: 'Denzel Washington, Dakota Fanning, Eugenio Mastrandrea',
        rating: 'R',
        year: '2023',
        length: '1h 49m',
        audience: 'Thriller',
        description: 'Robert McCall vows to stop an Italian crime syndicate from brutalizing and extorting the residents of a small coastal town that has won his heart.',
        imageCard: 'te3-card.jpg',
        imageBg: 'te3-bg.jpg',
        imageIcon: 'te3-icon.png'
    },

]


db.prepare(`CREATE TABLE IF NOT EXISTS Data (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug NOT NULL,
        title TEXT NOT NULL,
        cast TEXT  NOT NULL,
        rating TEXT NOT NULL,
        year TEXT NOT NULL,
        length TEXT NOT NULL,
        audience TEXT NOT NULL,
        description TEXT NOT NULL,
        imageCard TEXT NOT NULL,
        imageBg TEXT NOT NULL,
        imageIcon TEXT NOT NULL
)`).run()

async function initData() {
    const stmt = db.prepare(`
    INSERT INTO Data VALUES(
        null,
        @slug,
        @title,
        @cast,
        @rating,
        @year,
        @length,
        @audience,
        @description,
        @imageCard,
        @imageBg,
        @imageIcon       
)`);
    for (const item of data) {
        stmt.run(item)
    }
}

initData();

