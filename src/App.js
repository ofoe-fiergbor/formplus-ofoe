import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardDisplay from "./components/cardDisplay/CardDisplay";
import Header from "./components/header/Header";
import Notice from "./components/notice/Notice";
import ApiService from "./api/ApiService";
import { setTemplates } from "./domain/redux/templateSlicer";
import Loading from "./components/loading/Loading";

function App() {
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);

  const fetchAllTemplates = async () => {
    setLoading(true);
    const { data, status, message } = await ApiService.fetchAll();
    if (!status.toString().match(/^2/i)) {
      alert(message);
    } else {
      dispatch(setTemplates(data));
    }
    setLoading(false);
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
