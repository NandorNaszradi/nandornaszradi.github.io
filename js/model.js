"use strict"

var todoList = [
    {
        title: 'Try to wake up on time',
        description: 'Aenean sed lacus non lorem faucibus sollicitudin. Fusce rutrum sapien vel nunc ultrices, sit amet ornare orci vulputate. Cras placerat mauris ante, eget malesuada lorem suscipit et. Aenean lacinia nisi quis urna malesuada, et tincidunt mi dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eleifend eros sit amet fringilla dapibus. Mauris id placerat mi, non efficitur diam. Nunc pulvinar, orci eget fermentum eleifend, sem.',
        startDay: 'Monday',
        dateTime: new Date(2019, 1, 1, 6, 0, 0, 0),
        urgent: true,
        priority: 'high'
    },
    {
        title: 'Go to the GYM',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
        startDay: 'Monday',
        dateTime: new Date(2019, 1, 1, 7, 0, 0, 0),
        urgent: true,
        priority: 'high'
    },
    {
        title: 'Drink the protein shake',
        description: 'Duis bibendum tellus risus, ac blandit mauris varius ac. Sed eleifend magna at faucibus sollicitudin. Mauris tincidunt tortor sem, ac bibendum felis vestibulum quis. Phasellus sed justo vel odio interdum accumsan et quis lorem. Mauris id commodo lacus. Phasellus eget justo in nibh tincidunt hendrerit rhoncus a nisi. Nam eleifend orci velit, sit amet malesuada ante tempor ut. Mauris enim sem, ultricies at ligula id.',
        startDay: 'Monday',
        dateTime: new Date(2019, 1, 1, 8, 15, 0, 0),
        urgent: false,
        priority: 'normal'
    },
    {
        title: 'Meeting with the client',
        description: 'Nulla facilisi. Praesent rutrum elit sed congue blandit. Nunc feugiat odio commodo ante ultrices, eget efficitur purus fringilla. Donec tempor hendrerit faucibus. Nullam sed urna arcu. Praesent porta ligula a felis condimentum commodo. Phasellus egestas blandit leo, id feugiat est pulvinar quis. Donec varius felis non ullamcorper molestie.',
        startDay: 'Monday',
        dateTime: new Date(2019, 1, 1, 9, 0, 0, 0),
        urgent: true,
        priority: 'high'
    },
    {
        title: 'Call the car mechanic',
        description: 'In hac habitasse platea dictumst. Pellentesque commodo fringilla ante, a faucibus est vulputate eu. In porttitor egestas viverra. Nunc suscipit, tortor sed lobortis pellentesque, ligula leo venenatis libero, eget auctor risus metus et quam. Sed id consequat orci. Donec iaculis consequat facilisis. Sed eu nunc id felis tristique bibendum. Suspendisse sollicitudin maximus eros sit amet malesuada.',
        startDay: 'Monday',
        dateTime: new Date(2019, 1, 1, 11, 30, 0, 0),
        urgent: false,
        priority: 'low'
    },
    {
        title: 'Lunc with the PM',
        description: 'Proin sit amet urna tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed a tellus urna. Etiam et turpis elit. Sed libero lacus, gravida sit amet sollicitudin sed, dignissim eget odio. Curabitur eu hendrerit erat. Praesent id leo turpis. Vestibulum et malesuada elit.',
        startDay: 'Monday',
        dateTime: new Date(2019, 1, 1, 12, 0, 0, 0),
        urgent: true,
        priority: 'high'
    },
    {
        title: 'New candidate interview',
        description: 'Mauris diam diam, ullamcorper at urna mollis, viverra suscipit ligula. Mauris eu neque ut massa finibus posuere a fermentum velit. In consectetur massa purus, in imperdiet arcu imperdiet non. Integer eu nisi sed neque suscipit fermentum vel at augue. Aliquam ornare ut lorem et scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        startDay: 'Monday',
        dateTime: new Date(2019, 1, 1, 14, 0, 0, 0),
        urgent: false,
        priority: 'normal'
    },
    {
        title: 'Talk-over with Daniel',
        description: 'Praesent in erat turpis. Integer pellentesque velit quis leo vehicula, quis dapibus urna ultrices. Etiam vulputate ante sodales arcu sagittis pharetra. Fusce maximus tempus enim, non venenatis leo malesuada a. Cras enim risus, auctor quis purus vel, fringilla malesuada metus. Donec scelerisque vitae dolor vitae cursus. Phasellus in magna eu turpis finibus accumsan ut vitae nibh.',
        startDay: 'Monday',
        dateTime: new Date(2019, 1, 1, 16, 30, 0, 0),
        urgent: false,
        priority: 'low'
    },
    {
        title: 'Dinner with Kitti',
        description: 'Donec sed massa id felis egestas pellentesque. Morbi sed egestas lacus, id vehicula lectus. Aenean sit amet rhoncus augue, eget sodales dui. Suspendisse vitae eleifend massa. Quisque congue egestas ligula, sed rutrum ex posuere vitae. Suspendisse sollicitudin iaculis scelerisque. Suspendisse dui turpis, vulputate vitae elit vel, accumsan porttitor justo. Proin ac urna nec erat vulputate fermentum sed vel arcu.',
        startDay: 'Monday',
        dateTime: new Date(2019, 1, 1, 18, 0, 0, 0),
        urgent: false,
        priority: 'high'
    }
];