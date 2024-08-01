// example 1
function Item(props) {
    return <li>{props.name}</li>
}

<Item name="Apple" />

// example 2
function Item(props) {
    return <li>
        {props.name} <i>(${props.price})</i>
    </li>
}

<Item name="Apple" price="0.99" />

// example 3
function Component() {
    return (
        <a href="#">
            <i className="icon"></i>
            <span>Link Button</span>
        </a>
    );
}

// example 4
function Component() {
    return (
        <>
            <a href="#">
                <i className="save-icon"></i>
                <span>Link Button</span>
            </a>
            <hr />
        </>
    );
}

/*
 *
 * <input type="text" />
 * <img src="" alt="" />
 * <br />
 * <hr />
 *
 */

// example 5
function Item({name, price}) {
    return (
        <li>{name} <i>(${price})</i></li>
    );
}

// example 6
function List(props) {
    return (
        <ul>
            {props.children}
        </ul>
    )
}

function Item({ name, price }) {
    return (
        <li>{name} <i>(${price})</i></li>
    );
}

<List>
    <Item name="Apple" price="0.89" />
    <Item name="Orange" price="0.89" />
</List>