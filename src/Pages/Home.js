import React from 'react';
import CarList from '../Comments/CarList';
import './Home.css';

export function Home() {
    const cars = [
        {
            id: 1,
            make: 'Mercedes-Benz',
            model: 'GLE-Class',
            year: 2020,
            price: 115000,
            image: 'https://s.list.am/f/007/69941007.webp',
            description: 'GLE COUPE 450 AMG Վերջնական գինը մեքենան տեսնելուց հետո։ Սրահից գնված։ Գերազանց վիճակ։ Շատ քիչ է շահագործվել։ 2020/08րդ ամիս: Յուղը և ֆիլտրերը նոր են փոխվել Mercedessi սերվիզում, առկա են փաստաթղթերը։2 բանալի: Ունի շատ օպցիաներ՝ բեռնախցիկի անհպում (սենսոր ոտքի շարժումով) բացում և փակում, բաժակակալների տաքացում և սառեցում, անլար հեռախոսի լիցքավորում և այլն։'
        },
        {
            id: 2,
            make: 'Toyota',
            model: 'Camry',
            year: 2018,
            price: 24900,
            image: 'https://s.list.am/f/925/70440925.webp',
            description: 'Camry SE 2018 2.5: Նոր անվադողեր: 4t1b11hk1ku179092'
        },
        {
            id: 3,
            make: 'Nissan',
            model: 'Altima',
            year: 2017,
            price: 14950,
            image: 'https://s.list.am/f/193/72019193.webp',
            description: 'ՓՈԽԱՆԱԿՈՒՄ ՉԿԱ։ Մեքենան գտնվում է իդեալական վիճակում։ Գազ չկա ու չի եղել։ Վազքը իրական ակտուալ: SR կոմպլեկտացիա midnight edition հատուկ թողարկում։ Մեքենան մաքուր 2017 թիվ է։ Կատալիզատորները հանած չի։ Գործարանային led ֆառեր։ Դալնի լույսը led: Հակամառախուղային լույսերը xenon իրենց բլոկներով։ Բոշ սիգնալ։ ФСО լույսեր։ Հեռվից խոդ տվող գործարանային համակարգ։ Start Stop։ Բոլոր յուղերը փոխված են։ Ամառային լրիվ նոր Triangle անվադողեր։ Անվտանգության բացված բարձիկները փոխարինված են օրիգինալ բարձիկներով։'
        },
        {
            id: 4,
            make: 'BMW',
            model: 'i7',
            year: 2023,
            price: 182000,
            image: 'https://s.list.am/f/440/72210440.webp',
            description: 'Տվյալ մեքենան գտնվում է Գերմանիայում. 2017թ և բարձր նոր կամ քիչ շահագործված գրեթե ցանկացած մեքենա կարող եք պատվիրել «Շտապ ավտովաճառք» ընկերության միջոցով. Ցանկության դեպքում կներկրենք 15-25 օրվա ընթացում'
        },
        {
            id: 5,
            make: 'Mercedes-Benz',
            model: 'CLA-Class AMG',
            year: 2017,
            price: 25000,
            image: 'https://s.list.am/f/910/65842910.webp',
            description: 'Մեքենան գտնվու է իդեալական անթերի վիճակում 2.տուռբո Ներմուծվել է Հայաստան ԱՄՆ-ից 2022 թ (2017-2018) 211-235 ձիաուժ, ABS, TRC, ESP, Տուրբոմղիչ, Բորտ-համակարգիչ, Հայելիների տաքացում, Տաքացվող նստատեղեր, Էլեկտրակառավարվող հայելիներ, Անձրևի սենսոր, Լույսի սենսոր, Կրուիզ-կոնտրոլ, (ֆուլլ)'
        }
    ];

    return (
        <div className="Home">
            <nav>
                <div>CarSell</div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                </ul>
            </nav>
            <section>
                <CarList cars={cars} />
            </section>
            <footer>
                <div className="footer-left">
                    <p>CarSell &copy; 2023</p>
                </div>
                <div className="footer-right">
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}
