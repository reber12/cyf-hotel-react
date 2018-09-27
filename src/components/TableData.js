import React, {Component} from "react";
import moment from "moment";

class TableData extends Component {
  ender() {
    const res = props.results;
    return (
      <tbody>
        {res.map(function(result) {
          return (
            <tr key={result.id}>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>
                {moment(result.checkOutDate).diff(
                  moment(result.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableDat;
