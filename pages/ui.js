import Button from '../components/base/Button';

const UI = () => {
    return (
        <div>
            <div className="container">
                <h1>This is heading <span className="fw-bold">h1</span></h1>
                <h2>This is heading <span className="fw-bold">h2</span></h2>
                <h3>This is heading <span className="fw-bold">h3</span></h3>
                <h4>This is heading <span className="fw-bold">h4</span></h4>
                <h5>This is heading <span className="fw-bold">h5</span></h5>
                <p>
                    This is a body copy. <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <u>Un esempio di testo sottolineato</u>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Un esempio di testo evidenziato.
                </p>
                <p>
                    <b>Lo stacco del paragrafo</b>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <s>Un esempio di testo barrato</s>. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Un <a href="#">esempio di un link</a> nel testo.
                </p>
                <p className="small">
                    <small>
                        This is a micro copy. Sed ut perspiciatis <b>unde omnis iste natus error sit voluptatem</b> accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </small>
                </p>
                <p className="small">
                    <small>
                        <u>Neque porro quisquam est</u>, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </small>
                </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-auto">
                        <Button 
                            icon={["left", "chevron_left"]}
                            value="Default" />
                        <hr />
                        <Button 
                            icon={["right", "chevron_right"]}
                            value="Default" />
                        <hr />
                        <Button 
                            icon={["left", "chevron_left"]}
                            value="Large"
                            size="lg" />
                        <hr />
                        <Button 
                            icon={["right", "chevron_right"]}
                            value="Large"
                            size="lg" />
                        <hr />
                        <Button 
                            icon={["left", "chevron_left"]}
                            value="Small"
                            size="sm" />
                        <hr />
                        <Button 
                            icon={["right", "chevron_right"]}
                            value="Small"
                            size="sm" />
                    </div>
                    <div className="col-12 col-md-auto">
                        <Button 
                            value="Default" />
                        <hr />
                        <Button 
                            value="Large"
                            size="lg" />
                        <hr />
                        <Button 
                            value="Small"
                            size="sm" />
                        <hr />
                        <Button 
                            value="Active"
                            active />
                        <hr />
                        <Button 
                            value="Disabled"
                            disabled />
                    </div>
                    <div className="col-12 col-md-auto">
                        <Button 
                            variant="raisin-blue"
                            value="Default" />
                        <hr />
                        <Button 
                            value="Large"
                            variant="raisin-blue"
                            size="lg" />
                        <hr />
                        <Button 
                            value="Small"
                            variant="raisin-blue"
                            size="sm" />
                        <hr />
                        <Button 
                            value="Active"
                            variant="raisin-blue"
                            active />
                        <hr />
                        <Button 
                            value="Disabled"
                            variant="raisin-blue"
                            disabled />
                    </div>
                    <div className="col-12 col-md-auto">
                        <Button 
                            variant="grey-light"
                            value="Default" />
                        <hr />
                        <Button 
                            value="Large"
                            variant="grey-light"
                            size="lg" />
                        <hr />
                        <Button 
                            value="Small"
                            variant="grey-light"
                            size="sm" />
                        <hr />
                        <Button 
                            value="Active"
                            variant="grey-light"
                            active />
                        <hr />
                        <Button 
                            value="Disabled"
                            variant="grey-light"
                            disabled />
                    </div>
                    <div className="col-12 col-md-auto">
                        <Button 
                            icon={["only", "chevron_right"]}
                            variant="grey-light" />
                        <hr />
                        <Button 
                            icon={["only", "chevron_right"]}
                            variant="grey-light"
                            size="lg" />
                        <hr />
                        <Button 
                            icon={["only", "chevron_right"]}
                            variant="grey-light"
                            size="sm" />
                        <hr />
                        <Button 
                            value="Active"
                            variant="grey-light"
                            active />
                        <hr />
                        <Button 
                            value="Disabled"
                            variant="grey-light"
                            disabled />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UI;