import React from 'react';
import UserItem from '../components/user/user.component';
import CalendarItem from '../components/calendar/calendar.component';
import DetailsItem from '../components/details/details.component';
import data from '../data';
import './user_page.styles.css';
import Header from '../components/header/header.component';

const UserPage = (props) => {
  console.log(props);
  const members = data.members.map((member) => member);

  const id = [];
  const real_name = [];
  const activity_periods = [];
  const tz = [];
  for (let i = 0; i < members.length; i++) {
    id.push(members[i].id);
    real_name.push(members[i].real_name);
    activity_periods.push(members[i].activity_periods);
    tz.push(members[i].tz);
  }

  return (
    <div>
      <Header />
      <div className="all-content">
        {real_name.map((name, index) => (
          <div key={`User ${index}`} className="content">
            <UserItem id={id[index]} name={name} />
            <CalendarItem activity={activity_periods[index]} />
            <DetailsItem
              activity_details={activity_periods[index]}
              tz={tz[index]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
