let log = new Log (document.querySelector('.log'));

let char = new Sorcerer('Victor');
let monster = new Lich();

const stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start()