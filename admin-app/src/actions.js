const actions = {
  users: {
    LOAD: "users.load/begin",
    LOAD_OK: "users.load/ok",
    LOAD_FAIL: "users.load/fail",
    create: {
      OPEN_DIALOG: "meetings.dialog/open",
      CLOSE_DIALOG: "meetings.dialog/close"
    }
  },
  user: {
    LOAD: "user.load/begin",
    LOAD_OK: "user.load/ok",
    LOAD_FAIL: "user.load/fail"
  },
  meeting: {
    LOAD: "meeting.load/begin",
    LOAD_OK: "meeting.load/ok",
    LOAD_FAIL: "meeting.load/fail",
    RESET: "meeting.reset",
    document: {
      UPLOAD: "meeting.document.upload/begin",
      UPLOAD_PROGRESS: "meeting.document.upload/progess",
      UPLOAD_OK: "meeting.document.upload/ok",
      UPLOAD_FAIL: "meeting.document.upload/fail"
    }
  },
  meetings : {
    LOAD: "meetings.load/begin",
    LOAD_OK: "meetings.load/ok",
    LOAD_FAIL: "meetings.load/fail",
    create: {
      OPEN_DIALOG: "meetings.dialog/open",
      CLOSE_DIALOG: "meetings.dialog/close"
    }
  }
}

export default actions;