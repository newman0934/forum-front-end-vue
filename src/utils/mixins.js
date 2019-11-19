import moment from "moment";

export const fromNowFilter = {
    filters: {
        fromNow(datatime){
            return datatime? moment(datatime).fromNow() : "-"
        }
    }
}

export const emptyImageFilter = {
    filters: {
      emptyImage (src) {
        return src || 'http://via.placeholder.com/300x300?text=No+Image'
      }
    }
  }