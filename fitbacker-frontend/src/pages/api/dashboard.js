const dashboardData = [
    { name: 'Mon', Calories: 200 },
    { name: 'Tue', Calories: 270 },
    { name: 'Wed', Calories: 540 },
    { name: 'Thu', Calories: 25 },
    { name: 'Fri', Calories: 550 },
    { name: 'Sat', Calories: 400 },
    { name: 'Sun', Calories: 350 },
  ];
  
  export default function handler(req, res) {
    res.status(200).json(dashboardData);
  }
  