

function FormThirdStep() {
    return (
        <section className="form">
            <div className="step">
                <p>Krok 3/4</p>
                <h3>Lokalizacja:</h3>
                <form>
                    <select>
                        <option>Poznań</option>
                        <option>Warszawa</option>
                        <option>Kraków</option>
                        <option>Wrocław</option>
                        <option>Katowice</option>
                    </select>
                </form>
                <h4>Komu chcesz pomóc?</h4>
                <div>
                    <input type="checkbox" className="btn-check" id="btn-check1" autoComplete="off" />
                    <label className="btn btn-primary" htmlFor="btn-check1">dzieciom</label>

                    <input type="checkbox" className="btn-check" id="btn-check2" autoComplete="off" />
                    <label className="btn btn-primary" htmlFor="btn-check2">samotnym matkom</label>

                    <input type="checkbox" className="btn-check" id="btn-check3" autoComplete="off" />
                    <label className="btn btn-primary" htmlFor="btn-check3">bezdomnym</label> <br/>

                    <input type="checkbox" className="btn-check" id="btn-check4" autoComplete="off" />
                    <label className="btn btn-primary" htmlFor="btn-check4">niepełnosprawnym</label>

                    <input type="checkbox" className="btn-check" id="btn-check5" autoComplete="off" />
                    <label className="btn btn-primary" htmlFor="btn-check5">osobom starszym</label>
                </div>
                <div>
                    <h4>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h4>
                    <input/>
                </div>
                <div className="form__btns">
                    <button>Wstecz</button>
                    <button>Dalej</button>
                </div>
            </div>

        </section>
    )
}
export default FormThirdStep;