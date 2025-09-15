<template>
    <div class="about-us-container">
        <Header></Header>
        <div class="about-us-content">
            <h2 class="title">O nama</h2>

            <p class="paragraph first-paragraph">
                Dobrodošli na našu društvenu mrežu posvećenu domaćim filmovima!
                Naš cilj je da stvorimo zajednicu filmofila gde će ljubitelji sedme umetnosti moći da ocenjuju,
                komentarišu i razmenjuju utiske o domaćoj filmskoj produkciji.
            </p>

            <p class="paragraph second-paragraph">
                Iza ovog projekta stoje <a href="https://www.instagram.com/bogdanblagojevicc/" class="strong">Bogdan
                    Blagojević</a> i <a href="https://www.instagram.com/philippos002/" class="strong">Filip
                    Mitic</a>,
                studenti završne godine <a href="https://www.instagram.com/fon_bg/" class="strong">Fakulteta organizacionih nauka</a>. Kao veliki
                ljubitelji filma,
                želimo da publici omogućimo jednostavan i moderan način da prate nova ostvarenja, podele svoje mišljenje
                i otkriju filmove koji zaslužuju pažnju.
            </p>

            <p class="paragraph third-paragraph">
                Verujemo da domaća kinematografija ima ogroman potencijal, a naša platforma ima za cilj da pomogne u
                njenom razvoju kroz aktivnije uključivanje gledalaca.
            </p>

            <div class="list-wrapper">
                <p class="paragraf naslov-liste"><strong class="strong">Na našem sajtu možete:</strong></p>
                <ul class="list">
                    <li>oceniti filmove i videti prosečne ocene zajednice,</li>
                    <li>komentarisati i diskutovati sa drugim ljubiteljima filma,</li>
                    <li>otkriti nove naslove koje možda niste imali prilike da pogledate,</li>
                    <li>pratiti trendove i rang-liste domaćih ostvarenja.</li>
                </ul>
            </div>

            <p class="paragraph">
                Naš zadatak je da filmsku kulturu približimo što većem broju ljudi i da stvorimo prostor gde će glas
                publike
                biti jednako važan kao i kritički osvrt.
            </p>

            <div class="paragraph welcome">Dobrodošli, uživajte!
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
    components: {
        Header, Footer
    }
}
</script>

<style>
.about-us-container {
    display: flex;
    flex-direction: column;

}

.about-us-content {
    display: flex;
    min-height: 80vh;
    flex-direction: column;
    padding: 5rem 4rem;
}

.title {
    padding: 2rem 0;
    font-size: 2rem;

}

.paragraph {
    padding: 0.2rem 0;
    font-size: 1rem;
}

.list-wrapper {
    padding: 5rem 0rem;
}

.list {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

li {
    font-size: 1rem;
}

.welcome {
    margin-top: auto;
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
    padding-top: 2rem;
}

.strong {
    font-size: 1.1rem;
    font-weight: bold;
}

.about-us-content a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;
    box-shadow: none;
    background: none;
}

.about-us-content a:hover {
    color: #1db954;
}
</style>