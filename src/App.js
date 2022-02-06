import { useEffect } from "react";
import ApiService from "./api/ApiService";
import Notice from "./components/notice/Notice";
import Header from "./components/header/Header";
import Loading from "./components/loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import CardDisplay from "./components/cardDisplay/CardDisplay";
import { setTemplates, setLoading } from "./domain/redux/templateSlicer";

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.templates);

  const fetchAllTemplates = async () => {
    dispatch(setLoading(true));
    const { data, status, message } = await ApiService.fetchAll();
    if (!status.toString().match(/^2/i)) {
      alert(message);
    } else {
      dispatch(setTemplates(data));
    }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchAllTemplates();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      <Header />
      <Notice />
      {isLoading ? <Loading /> : <CardDisplay />}
    </div>
  );
}

export default App;
