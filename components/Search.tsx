import './../styles/search.scss';
export default function Search(){
    return (
    <div className="search-form">
        <form action="#">
            <input type="text" placeholder="Type a Word" />
            <button>Search</button>
        </form>
    </div>
    );
}