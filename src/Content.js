import scp from './scp.json';

scp = scp.map(

    (id) => {
        return(
            <div className="card shadow" key={id.id}>
                <img src={id.image} alt="" width="800" height="400" />
                <div class="card-body">
                <h4 class="card-text">ITEM: {id.item}</h4>
                <h6 className="card-text">CLASS: {id.class}</h6>
                <p className="card-text">CONTAINMENT: {id.containment}</p>
                <p className="card-text">DESCRIPTION: {id.description}</p>
                </div>
            </div>
        );
    }
);

function Content()
{
    return(
        <div>
            {scp}
        </div>
    );
}

export default Content;