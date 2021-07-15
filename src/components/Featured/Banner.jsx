import "./Banner.css";

export default function Banner() {

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner">
            <div className="bannerContents">
                <h1 className="bannerTitle">Titre du Film</h1>
                <div className="bannerButtons">
                    <button className="bannerButton">liste</button>
                    <button className="bannerButton">infos</button>
                </div>
                <h2 className="bannerDescription">
                    {truncate(`c'est la description du film test !!
                    c'est la description du film test !!
                    c'est la description du film test !!
                    c'est la description du film test !!
                    c'est la description du film test !!
                    c'est la description du film test !!
                    c'est la description du film test !!
                    c'est la description du film test !!
                    c'est la description du film test !!
                    c'est la description du film test !!
                    c'est la description du film test !!
                    c'est la description du film test !!
                    c'est la description du film test !!
                    c'est la description du film test !!
                    c'est la description du film test !!
                    c'est la description du film test !!
                    c'est la description du film test !!`, 150)}
                </h2>
            </div>
            <div className="bannerFadeBottom" />

        </header>
    );
}
