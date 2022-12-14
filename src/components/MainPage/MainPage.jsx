import React from "react";
import s from "./MainPage.module.css"
import OrigamiCraft from "./OrigamiCraft/OrigamiCraft";
import pic1 from "./../../img/origami.jpg"
import pic2 from "./../../img/Serdechco.jpg"
import pic3 from "./../../img/maxresdefault.jpg"
import pic4 from "./../../img/mnogo.jpg"
import pic5 from "./../../img/book.jpg"
import pic6 from "./../../img/skelet.jpg"

const MainPage = () => {
    return (
        <div className={s.grid}>
            <OrigamiCraft name="Оригами бабочки" img={pic1} text="Превосходное украшение вашей комнаты или личного дневника. Удивительная поделка из бумаги дарит хорошее настроение и радость творчества!"/>
            <OrigamiCraft name="Оригами сердечки" img={pic2} text='Подарок, сделанный своими руками - самое лучшее, что можно подарить любимому или дорогому человеку. Отличный и очень понятный мастер класс поможет вам быстро освоить технику складывания оригами "Сердечко".'/>
            <OrigamiCraft name="Оригами снежинка" img={pic3} text="Обязательный атрибут Новогоднего декорирования. Снежинки из бумаги делаются очень просто и с использованием разных техник, в нашем мастер классе мы сделаем снежинку в технике оригами."/>
            <OrigamiCraft name="Многогранник из бумаги"img={pic4} text="Сделать из бумаги многогранник - Икосаэдр очень просто в технике оригами из модулей Mitsunobu Sonobe. Такая интересная поделка кусудама станет интересным украшением или подарком, способным удивить друзей. Бумажный шар кусудама станет к тому же интересной елочной игрушкой на Новый год и отлично украсит новогоднюю елку на праздник."/>
            <OrigamiCraft name="Сердечко закладка"img={pic5} text="Закладка из бумаги - вещь весьма практичная. Благодаря ей вы сможете быстро найти нужную страницу в книге, тетрадке или блокноте. Особую популярность приобрели закладки, которые сделаны из бумаги в технике оригами. Создать её может каждый, главное подобрать несложную и понятную технику."/>
            <OrigamiCraft name="Жуткий скелет руки"img={pic6} text="Применений этому необычному артефакту можно найти довольно много, а именно: напугать друга, повесить на шею, повесить в машине на зеркало, поставить на полочку, прикрепить к стене или сделать игрушку для кошки Сборка очень простая и логичная. Ее можно использовать как украшение дома во время так любимого многими людьми праздника Хэллоуина."/>
        </div>
    );
}

export default MainPage