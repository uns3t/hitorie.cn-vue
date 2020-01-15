<template>
    <div>
        <div class="topborder"></div>
        <div class="bottomborder"></div>
        <div class="leftborder"></div>
        <div class="rightborder"></div>

        <div class="mask1">
            <div class="menu-button">
                <a href="Profiles-Bio.html">
                    <div class="Profiles-in"></div>
                </a>
                <a href="Fans work.html">
                    <div class="Fanswork-in"></div>
                </a>
                <a href="How to-buy.html">
                    <div class="Howto-in"></div>
                </a>
                <a href="About us.html">
                    <div class="Aboutus-in"></div>
                </a>
            </div>
        </div>

        <div class="menu-img" id="mask1"></div>
        <div class="logo"></div>

        <div class="main">
            <div class="clientmain">
                <div class="title"></div>
                <div class="titleline"></div>
                <div class="profiles-menu">
                    <a @click="toOtherpage('/bio')"><div class="Bio"></div></a>
                    <a @click="toOtherpage('/member')"><div class="Member"></div></a>
                    <a @click="toOtherpage('/disc')"><div class="Disc"></div></a>
                </div>
                <div class="content">

                    <div class="character">
                        <div class="charactername">
                            <img src="../assets/img/aisolatename.png">
                        </div>
                        <div class="charactercontent">
                            【初回生産限定盤】<br>
                            2017.12.06<br>
                            AICL-3451 ¥2,800＋税<br>
                            DISC 1<br>
                            1. 絶対的<br>
                            2. アンノウン・マザーグース<br>
                            3. Namid[A]me<br>
                            4. Loveless<br>
                            5. ソシアルクロック<br>
                            6. NAI.<br>
                            DISC 2<br>
                            01.心呼吸<br>
                            02.ワンミーツハー<br>
                            03. インパーフェクション<br>
                            04. Daydreamer(s)<br>
                            05.イヴステッパー<br>
                            06.るらるら<br>
                            07. doppel<br>
                            08.极夜灯<br>
                            09.さいはて<br>
                            10. KOTONOHA<br>
                            11.ハグレノカラー<br>
                            12.5カウントハロー<br>
                            13. 踊るマネキン、呗う阿呆<br>
                            14.シャッタードール<br>
                            15. リトルクライベイビー<br>
                            16. 目眩<br><br>
                            2017.12.06<br>
                            AICL-3453 ¥1,800＋税<br>
                            DISC 1<br>
                            1. 絶対的<br>
                            2. アンノウン・マザーグース<br>
                            3. Namid[A]me<br>
                            4. Loveless<br>
                            5. ソシアルクロック<br>
                            6. NAI.<br>
                        </div>
                        <div class="characterimg">
                            <img src="../assets/img/aisolate.png">
                        </div>
                        <div class="submenu">
                            <a href="aisolate-lyrics.html">
                                <img src="../assets/img/lyrics.png">
                            </a>
                        </div>
                    </div>

                    <div class="character">
                        <div class="charactername">
                            <img src="../assets/img/ikiname.png">
                        </div>
                        <div class="charactercontent">
                            IKI【初回生産限定盤】<br>
                            2016.12.07<br>
                            AICL-3225 ¥3,400＋税<br>
                            DISC 1<br>
                            1. KOTONOHA<br>
                            2. 心呼吸<br>
                            3. リトルクライベイビー<br>
                            4. イヴステッパー<br>
                            5. Daydreamer(s)<br>
                            6. 極夜灯<br>
                            7. doppel<br>
                            8. ハグレノカラー<br>
                            9. さいはて<br>
                            10. 目眩<br>
                            DISC 2<br>
                            1. KOTONOHA Studio LIVE "IKI" Session<br>
                            2. イヴステッパー Studio LIVE "IKI" Session<br>
                            3. リトルクライベイビー Studio LIVE "IKI" Session<br>
                            4. 特典映像：REC Document & Photo Shoot MOVIE<br><br>
                            2016.12.07<br>
                            AICL-3227 ¥2,600＋税<br>
                            DISC 1<br>
                            1. KOTONOHA<br>
                            2. 心呼吸<br>
                            3. リトルクライベイビー<br>
                            4. イヴステッパー<br>
                            5. Daydreamer(s)<br>
                            6. 極夜灯<br>
                            7. doppel<br>
                            8. ハグレノカラー<br>
                            9. さいはて<br>
                            10. 目眩<br>
                        </div>
                        <div class="characterimg">
                            <img src="../assets/img/iki.png">
                        </div>
                        <div class="submenu">
                            <a href="iki-lyrics.html">
                                <img src="../assets/img/lyrics.png">
                            </a>
                        </div>
                    </div>

                    <div class="character">
                        <div class="charactername">
                            <img src="../assets/img/deeperdvdname.png">
                        </div>
                        <div class="charactercontent">
                            【Blu-ray盤】<br>
                            2016.08.17<br>
                            AIXL-78 ¥4,900＋税<br>
                            DISC 1<br>
                            1. GO BACK TO VENUSFORT<br>
                            2. シャッタードール<br>
                            3. Swipe, Shrink<br>
                            4. アンチテーゼ・ジャンクガール<br>
                            5. ワンミーツハー<br>
                            6. サークル サークル<br>
                            7. バスタブと夢遊<br>
                            8. Inaikara<br>
                            9. なぜなぜ<br>
                            10. フユノ<br>
                            11. カラノワレモノ<br>
                            12. 輪郭<br>
                            13. 後天症のバックビート<br>
                            14. 踊るマネキン、唄う阿呆<br>
                            15. MIRROR<br>
                            16. インパーフェクション<br>
                            17. トーキーダンス<br>
                            18. プリズムキューブ<br>
                            19. ハグレノカラー [新曲]<br>
                            20. センスレス・ワンダー<br>
                        </div>
                        <div class="characterimg">
                            <img src="../assets/img/deeperdvd.png">
                        </div>
                    </div>

                    <div class="character">
                        <div class="charactername">
                            <img src="../assets/img/deepername.png">
                        </div>
                        <div class="charactercontent">
                            【初回生産限定盤】<br>
                            2016.02.24<br>
                            AICL-3058 ¥3,400＋税<br>
                            DISC 1<br>
                            1. GO BACK TO VENUSFORT<br>
                            2. シャッタードール<br>
                            3. ワンミーツハー<br>
                            4. Swipe, Shrink<br>
                            5. トーキーダンス<br>
                            6. 輪郭<br>
                            7. フユノ<br>
                            8. バスタブと夢遊<br>
                            9. 後天症のバックビート<br>
                            10. MIRROR<br>
                            DISC 2<br>
                            1. トーキーダンス(Music Video)<br>
                            2. シャッタードール(Music Video)<br>
                            3. カラノワレモノ[ReREC](Music Video)<br>
                            4. ワンミーツハー(Music Video)<br>
                            5. フユノ(Music Video)<br>
                            6. "DEEPER"全曲解説＋omake<br><br>
                            2016.02.24<br>
                            AICL-3060 ¥2,600＋税<br>
                            DISC 1<br>
                            1. GO BACK TO VENUSFORT<br>
                            2. シャッタードール<br>
                            3. ワンミーツハー<br>
                            4. Swipe, Shrink<br>
                            5. トーキーダンス<br>
                            6. 輪郭<br>
                            7. フユノ<br>
                            8. バスタブと夢遊<br>
                            9. 後天症のバックビート<br>
                            10. MIRROR<br>
                        </div>
                        <div class="characterimg">
                            <img src="../assets/img/deeper.png">
                        </div>
                        <div class="submenu">
                            <a href="deeper-lyrics.html">
                                <img src="../assets/img/lyrics.png">
                            </a>
                        </div>
                    </div>

                    <div class="character">
                        <div class="charactername">
                            <img src="../assets/img/onemename.png">
                        </div>
                        <div class="charactercontent">
                            【期間生産限定盤A[CD+DVD]】<br>
                            2016.01.27<br>
                            AICL-3039 ¥1,500＋税<br>
                            DISC 1<br>
                            1. ワンミーツハー<br>
                            2. ワンミーツハー(Instrumental)<br>
                            3. ワンミーツハー(non-wowaka)<br>
                            4. ワンミーツハー(non-shinoda)<br>
                            5. ワンミーツハー(non-ygarshy)<br>
                            6. ワンミーツハー(non-yumao)<br>
                            DISC 2<br>
                            1. ワンミーツハー プレイムービー(wowaka)<br>
                            2. ワンミーツハー プレイムービー(シノダ)<br>
                            3. ワンミーツハー プレイムービー(イガラシ)<br>
                            4. ワンミーツハー プレイムービー(ゆーまお)<br><br>
                            【期間生産限定盤B[CD]】<br>
                            2016.01.27<br>
                            AICL-3041 ¥1,200＋税<br>
                            DISC 1<br>
                            1. ワンミーツハー<br>
                            2. ワンミーツハー(TV edit)<br>
                            3. ワンミーツハー(acoustic ver.)<br>
                        </div>
                        <div class="characterimg">
                            <img src="../assets/img/onemea.png">
                            <img src="../assets/img/onemeb.png">
                        </div>
                        <div class="submenu">
                            <a href="oneme-lyrics.html">
                                <img src="../assets/img/lyrics.png">
                            </a>
                        </div>
                    </div>

                    <div class="character">
                        <div class="charactername">
                            <img src="../assets/img/nonname.png">
                        </div>
                        <div class="charactercontent">
                            2015.11.04<br>
                            AICL-2995 ¥2,000＋税<br>
                            DISC 1<br>
                            1. SisterJudy<br>
                            2. モンタージュガール<br>
                            3. アレとコレと、女の子<br>
                            4. るらるら<br>
                            5. サブリミナル・ワンステップ<br>
                            6. カラノワレモノ<br>
                            7. 泡色の街<br>
                            8. らんらんと泣いて<br>
                            9. Inaikara<br>
                            10. ハネルマワル<br>
                            11. カラノワレモノ[ReREC]<br>
                        </div>
                        <div class="characterimg">
                            <img src="../assets/img/non.png">
                        </div>
                        <div class="submenu">
                            <a href="non-lyrics.html">
                                <img src="../assets/img/lyrics.png">
                            </a>
                        </div>
                    </div>

                    <div class="character">
                        <div class="charactername">
                            <img src="../assets/img/single2name.png">
                        </div>
                        <div class="charactercontent">
                            【完全生産限定盤】<br>
                            2015.11.04<br>
                            AICL-2994 ¥2,300＋税<br>
                            DISC 1<br>
                            1. finder<br>
                            2. シャッタードール<br>
                            3. Film/looP<br>
                            <br><br>
                        </div>
                        <div class="characterimg">
                            <img src="../assets/img/single2.png">
                        </div>
                        <div class="submenu">
                            <a href="single2-lyrics.html">
                                <img src="../assets/img/lyrics.png">
                            </a>
                        </div>
                    </div>

                    <div class="character">
                        <div class="charactername">
                            <img src="../assets/img/album3name.png">
                        </div>
                        <div class="charactercontent">
                            【初回生産限定盤】<br>
                            2015.07.01<br>
                            AICL-2901 ¥2,500＋税<br>
                            DISC 1<br>
                            1. 劇場街<br>
                            2. トーキーダンス<br>
                            3. サークル サークル<br>
                            4. 深夜0時<br>
                            5. モノカラー<br>
                            DISC 2<br>
                            1. 終着点<br>
                            2. インパーフェクション<br>
                            3. NONSENSE<br>
                            4. 5カウントハロー<br>
                            5. なぜなぜ<br><br>
                            2015.07.01<br>
                            AICL-2903 ¥1,850＋税<br>
                            DISC 1<br>
                            1. 劇場街<br>
                            2. トーキーダンス<br>
                            3. サークル サークル<br>
                            4. 深夜0時<br>
                            5. モノカラー<br>
                        </div>
                        <div class="characterimg">
                            <img src="../assets/img/album3.png">
                        </div>
                        <div class="submenu">
                            <a href="album3-lyrics.html">
                                <img src="../assets/img/lyrics.png">
                            </a>
                        </div>
                    </div>

                    <div class="character">
                        <div class="charactername">
                            <img src="../assets/img/wawname.png">
                        </div>
                        <div class="charactercontent">
                            【初回生産限定盤】<br>
                            2014.11.26<br>
                            AICL-2785 ¥3,400＋税<br>
                            DISC 1<br>
                            1. 終着点<br>
                            2. インパーフェクション<br>
                            3. N/A<br>
                            4. 5カウントハロー<br>
                            5. ビューパ・シネマ<br>
                            6. 癖<br>
                            7. NONSENSE<br>
                            8. ボートマン<br>
                            9. なぜなぜ<br>
                            10. 我楽多遊び<br>
                            11. ゴーストロール<br>
                            12. センスレス・ワンダー<br>
                            DISC 2<br>
                            1. ワールズエンド・ダンスホール<br>
                            2. (W)HERE<br>
                            3. センスレス・ワンダー<br>
                            4. 踊るマネキン、唄う阿呆<br>
                            5. ローリンガール<br><br>
                            2014.11.26<br>
                            AICL-2787 ¥2,800＋税<br>
                            DISC 1<br>
                            1. 終着点<br>
                            2. インパーフェクション<br>
                            3. N/A<br>
                            4. 5カウントハロー<br>
                            5. ビューパ・シネマ<br>
                            6. 癖<br>
                            7. NONSENSE<br>
                            8. ボートマン<br>
                            9. なぜなぜ<br>
                            10. 我楽多遊び<br>
                            11. ゴーストロール<br>
                            12. センスレス・ワンダー<br>
                        </div>
                        <div class="characterimg">
                            <img src="../assets/img/waw.png">
                        </div>
                        <div class="submenu">
                            <a href="waw-lyrics.html">
                                <img src="../assets/img/lyrics.png">
                            </a>
                        </div>
                    </div>

                    <div class="character">
                        <div class="charactername">
                            <img src="../assets/img/album1name.png">
                        </div>
                        <div class="charactercontent">
                            2014.02.19<br>
                            SVWC-7986 ¥1,800＋税<br>
                            DISC 1<br>
                            1. アイマイ・アンドミー<br>
                            2. 生きたがりの娘<br>
                            3. アンチテーゼ・ジャンクガール<br>
                            4. 踊るマネキン、唄う阿呆<br>
                            5. (W)HERE<br>
                            6. ever ever ever<br>
                            7. 浮遊と沈没と<br>
                        </div>
                        <div class="characterimg">
                            <img src="../assets/img/album1.png">
                        </div>
                        <div class="submenu">
                            <a href="album1-lyrics.html">
                                <img src="../assets/img/lyrics.png">
                            </a>
                        </div>
                    </div>

                    <div class="character">
                        <div class="charactername">
                            <img src="../assets/img/single1name.png">
                        </div>
                        <div class="charactercontent">
                            【初回生産限定盤】<br>
                            2014.01.22<br>
                            SVWC-7977 ¥2,000＋税<br>
                            DISC 1<br>
                            1. センスレス・ワンダー<br>
                            2. さらってほしいの<br>
                            3. darasta<br>
                            DISC 2<br>
                            1. SisterJudy<br>
                            2. モンタージュガール<br>
                            3. アレとコレと、女の子<br>
                            4. るらるら<br>
                            5. サブリミナル・ワンステップ<br>
                            6. カラノワレモノ<br>
                            7. 泡色の街<br><br>
                            2014.01.22<br>
                            SVWC-7979 ¥1,200＋税<br>
                            DISC 1<br>
                            1. センスレス・ワンダー<br>
                            2. さらってほしいの<br>
                            3. darasta<br>
                        </div>
                        <div class="characterimg">
                            <img src="../assets/img/single1a.png">
                            <img src="../assets/img/single1b.png">
                        </div>
                        <div class="submenu">
                            <a href="single1-lyrics.html">
                                <img src="../assets/img/lyrics.png">
                            </a>
                        </div>
                    </div>

                    <div class="character">
                        <div class="charactername">
                            <img src="../assets/img/indies2name.png">
                        </div>
                        <div class="charactercontent">
                            HTRE-0002 ￥500<br>
                            DISC 1<br>
                            1.らんらんと泣いて<br>
                            2.Inaikara<br>
                            3.ハネルマワル<br>
                            <br>
                            <br>
                        </div>
                        <div class="characterimg">
                            <img src="../assets/img/indies2.png">
                        </div>
                        <div class="submenu">
                            <a href="indies2-lyrics.html">
                                <img src="../assets/img/lyrics.png">
                            </a>
                        </div>
                    </div>

                    <div class="characterlast">
                        <div class="charactername">
                            <img src="../assets/img/indies1name.png">
                        </div>
                        <div class="charactercontent">
                            HTRE-0001 ￥1,000<br>
                            DISC 1<br>
                            1.SisterJudy<br>
                            2.モンタージュガール<br>
                            3.アレとコレと、女の子<br>
                            4.るらるら<br>
                            5.サブリミナル・ワンステップ<br>
                            6.カラノワレモノ<br>
                            7.泡色の街<br>
                        </div>
                        <div class="characterimg">
                            <img src="../assets/img/indies1.png">
                        </div>
                        <div class="submenu">
                            <a href="indies1-lyrics.html">
                                <img src="../assets/img/lyrics.png">
                            </a>
                        </div>
                    </div>

                </div>
                <div class="whitebottom"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import "../assets/css/c3.css"

    export default {
        name: "disc",
        methods:{
            toOtherpage(path){
                window.$router.push(path)
            }
        }
    }
</script>

<style scoped>
    .Bio
    {
        float: left;
        height: 39px;
        width: 132px;
        margin-bottom: 10px;
        background: url("../assets/img/Bio.png") no-repeat center center;
    }
    .Bio:hover
    {
        float: left;
        height: 39px;
        width: 132px;
        margin-bottom: 10px;
        background: url("../assets/img/Bio-on.png") no-repeat center center;
    }
    .Member
    {
        float: left;
        height: 39px;
        width: 132px;
        margin-bottom: 10px;
        background: url("../assets/img/Member.png") no-repeat center center;
    }
    .Member:hover
    {
        float: left;
        height: 39px;
        width: 132px;
        margin-bottom: 10px;
        background: url("../assets/img/Member-on.png") no-repeat center center;
    }
    .Disc
    {
        float: left;
        height: 39px;
        width: 132px;
        margin-bottom: 10px;
        background: url("../assets/img/Disc-on.png") no-repeat center center;
    }
</style>
