import "../../scss/main.scss"

function HomeThreeColumns() {

    return (
        <section className="cols">
            <div className="col">
                <h1>10</h1>
                <span>Oddanych worków</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col">
                <h1>5</h1>
                <span>Wspartych organizacji</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  </div>
            <div className="col">
                <h1>7</h1>
                <span>Zorganizowanych zbiórek</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> </div>
        </section>
    );
}

export default HomeThreeColumns;