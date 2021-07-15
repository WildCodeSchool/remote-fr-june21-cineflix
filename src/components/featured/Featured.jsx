import "./Featured.css";

export default function Featured({ type }) {
    return (
        <header className="featured">
            <div className="bannerContents">
                <h1 className="bannerTitle">Titre du Film</h1>
                <div className="bannerButtons">
                    <button className="bannerButton">liste</button>
                    <button className="bannerButton">infos</button>
                </div>
                <h2 className="bannerDescription">
                    c'est la description du film test !!
                </h2>
                <div className="bannerFadeBottom"></div>
            </div>
        </header>
    );
}
