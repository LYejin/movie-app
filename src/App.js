import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// state를 이용하기 위해서 class component를 사용한다.
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  // ES6에서의 기능으로 오브젝트 안에 있는 값을 불러올 수 있습니다.

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000);
  }
  // async : componentDidMount 함수가 끝날 때까지 시간이 걸리 수 있다고 말해주는 기능
  // await : axio가 끝날때까지 기다린다.

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                // key가 있어야 한다.
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;

// class App extends React.Component {
//   state = {
//     count: 0,
//   };
//   add = () => {
//     this.setState((current) => ({ count: current.count + 1 }));
//   };
//   minus = () => {
//     this.setState((current) => ({ count: current.count - 1 }));
//   };
//   componentDidMount() {
//     console.log("component rendered");
//   }
//   // component가 생성될 때
//   componentDidUpdate() {
//     console.log("i just updated");
//   }
//   componentWillUnmount() {
//     console.log("goodbye, cruel world");
//   }
//   // component가 떠날 때 호출된다.
//   render() {
//     console.log("im rendering");
//     return (
//       <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }
// // Function component는 function이고 뭔가를 return한다. 또한 screen에 표시된다.
// // class component는 class이지만 react component로 부터 확장되고 sreen에 표시된다.
// // set.state를 호출할 때마다
// // constructor render 전에 된다.
// // componentDidMount() render 후에 된다.
// // Updating
// // - static getDerivedStateFromProps()
// // - shouldComponentUpdate()
// // - render()
// // - getSnapshotBeforeUpdate()
// // - componentDidUpdate()

// export default App;

// import React from "react";
// import PropTypes from "prop-types";
//export default App;

// const foodILike = [
//   {
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//     rating: 4.9,
//   },
//   {
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//     rating: 4.8,
//   },
//   {
//     name: "Bibimbap",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//     rating: 5.5,
//   },
//   {
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//     rating: 4.7,
//   },
//   {
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//     rating: 5.4,
//   },
// ];

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h2>I like {name}</h2>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// };

// function App() {
//   return (
//     <div>
//       {foodILike.map((dish) => (
//         <Food
//           key={dish.id}
//           name={dish.name}
//           picture={dish.image}
//           rating={dish.rating}
//         />
//       ))}
//     </div>
//   );
// }

// props 는 component에 넣게 되는 것들을 말한다.
// map은 array의 각 item에 function을 적용하고 array를 준다.
// 따라서 map은 array를 취하고 우리가 정확히 원하는 array를 반환한다.
// state는 동적 데이터와 함께 작업할 때 만들어진다. 변하는 데이터, 존재하지 않는 데이터, 변경된 데이터 등등
