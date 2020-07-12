import { Card, Button } from "react-bootstrap";

const News = ({category, data}) =>  (
    <>
        <h3 style={{textAlign: 'center'}}>
           {
                `${category} news`
           }
        </h3>
        {
            data && data.length < 1 && <div style={{
                marginTop: 150,
                textAlign: 'center'
            }}>Loading . . .</div>
        }
        {
            data && data.length > 0 &&
            <div className="container">
                <div className="row">
                {
                    data.map((d, idx) => (
                        <div className="col-md-4" key={idx}>
                            <Card className="mb-3">
                                <Card.Img variant="top" src={d.urlToImage} />
                                <Card.Body>
                                    <Card.Text>{d.author}</Card.Text>
                                    <Card.Title>{d.title}</Card.Title>
                                    <Card.Text>{d.description}</Card.Text>
                                    <Card.Text>{d.source.name}</Card.Text>
                                    <a className="btn btn-primary" href={d.url} variant="primary" target="_blank">Open News</a>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
                </div>
            </div>
        }
    </>
)

export default News;