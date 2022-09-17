import axios from "axios";
class Board {
  async AddBoard(title, content) {
    await axios.post(process.env.VEGAN_BASE_URL + "/board", null, {
      headers: {
        title: title,
        content: content,
      },
    });
  }
}
export default new Board();
