import './BreadCrumb.css'

function BreadCrumb(_props) {
    return (
        <>

            <div id="breadcrumb-page">
                <div className="image">
                    <img src="/others/2.jpg" alt="..." />
                </div>
                <div className="content-block">
                    <div className="container">
                        <div className="section-content">
                            <div className="head">{_props.head}</div>
                            <div className="slogan">
                                {_props.slogan}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BreadCrumb
