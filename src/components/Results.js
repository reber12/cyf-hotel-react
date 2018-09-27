import React from "react";
import moment from "moment";

const Results = (props) => {
  const res = props.results;
  return <div>
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>firstName </th>
            <th>surname </th>
            <th>email</th>
            <th>roomId</th>
            <th>check in date</th>
            <th>check out date</th>
            <th>number of days</th>
          </tr>
          {res.map(function(result) {
            return <tr key={result.id}>
                <td>{result.id}</td>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.check_in_date}</td>
                <td>{result.check_out_date}</td>
                <td>
                  {moment(result.check_out_date).diff(
                    moment(result.check_in_date),
                    "days"
                  )}
                </td>
              </tr>;
          })}
        </tbody>
      </table>
    </div>;
};
export default Results;
