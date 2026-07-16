export default function About() {

    return (

        <section>

            <header className="about-header">

                <h1>
                    Hasil Pelatihan
                </h1>

                <p>
                    Selama pelatihan saya mempelajari berbagai teknologi
                    yang digunakan dalam pengembangan website modern.
                </p>

            </header>

            <div className="about-grid">

                <article className="card">

                    <span className="card-tag">
                        Frontend
                    </span>

                    <h2>
                        React JS
                    </h2>

                    <p>
                        Saya mempelajari cara membangun website menggunakan
                        React JS serta memahami konsep Component,
                        Declarative UI, dan One Way Data Flow.
                    </p>

                    <div className="card-list">

                        <span>Components</span>

                        <span>Declarative UI</span>

                        <span>One Way Data Flow</span>

                    </div>

                </article>

                <article className="card">

                    <span className="card-tag">
                        Version Control
                    </span>

                    <h2>
                        GitHub
                    </h2>

                    <p>
                        Saya mempelajari penggunaan GitHub untuk membuat
                        repository, melakukan commit, push project,
                        dan mengelola source code.
                    </p>

                    <div className="card-list">

                        <span>Repository</span>

                        <span>Commit</span>

                        <span>Push</span>

                        <span>Version Control</span>

                    </div>

                </article>

            </div>

        </section>

    );

}