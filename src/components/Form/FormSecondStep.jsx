

function FormSecondStep() {
    return (
        <section className="form">
            <div className="step">
                <p>Krok 2/4</p>
                <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
                <form>
                    <label>Liczba 60l worków:</label>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </form>
                <div className="form__btns">
                    <button>Wstecz</button>
                    <button>Dalej</button>
                </div>
            </div>

        </section>
    )
}
export default FormSecondStep;