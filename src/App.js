import React from "react";
import { Switch, Route } from "react-router-dom";
import FormPizza from "./Components/Formlar/FormPizza";
import FormBurger from "./Components/Formlar/FormBurger";
import FormKumpir from "./Components/Formlar/FormKumpir";
import FormSalata from "./Components/Formlar/FormSalata";
import FormEvyemekleri from "./Components/Formlar/FormEvyemekleri";
import FormCigkofte from "./Components/Formlar/FormCigkofte";
import Linkler from "./Components/Linkler";

const App = () => {
  return (
    <div className="genel">
      <header className="header-genel">
        <h1>Teknolojik Yemekler</h1>
      </header>

      <div className="genel-flex">
        <Linkler />
        <Switch>
          <Route path="/pizza">
            <FormPizza />
          </Route>

          <Route path="/burger">
            <FormBurger />
          </Route>

          <Route path="/kumpir">
            <FormKumpir />
          </Route>

          <Route path="/salata">
            <FormSalata />
          </Route>

          <Route path="/evyemekleri">
            <FormEvyemekleri />
          </Route>

          <Route path="/cigkofte">
            <FormCigkofte />
          </Route>

          <Route path="/">
            <main className="main-sagtaraf">
              <p className="main-sagtaraf-buyukyazi">
                Teknolojik Yemekler ile satışlarınızı katlamaya başlayın
              </p>
              <br />
              <p className="main-sagtaraf-kucukyazi">
                Binlerce yeni kullanıcıya ulaşabilmek ister misiniz? Sadece
                kendi semtinizdekiler değil, artık çevre semtlerdeki binlerce
                kullanıcı da işletmenizden sipariş verebilecek. Bir ev, bir
                plaza, bir işyeri ya da üniversite kampüsü, hizmet vermek
                istediğiniz kim varsa artık müşteriniz. Gayet basit! Menünüzü
                listeliyoruz ve sipariş bilgilerini size ulaştırıyoruz. Sipariş
                teslimatını dilerseniz kendiniz yapabiliyorsunuz, dilerseniz
                Yemeksepeti sizin adına kullanıcıya ulaştırıyor. Hemen ailemize
                katılabilir ve muhteşem avantajlara sahip iş ortaklarımızdan
                biri olabilirsiniz.
              </p>
              <button className="main-sagtaraf-buton">Başlayalım</button>
            </main>
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default App;
