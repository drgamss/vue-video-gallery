
  const bus = new Vue();
  Vue.prototype.eventHub = bus;
  
  var myHelpers = {
    data: function(){
      return {
        title: 'Choose Category',
        videos: [
        {"id":1,"video_id":"zui6JgdZo8o","title":"After Sunset","category":"Melodic"},
        {"id":2,"video_id":"WlrG5K9Hl0U","title":"Chen","category":"Industrial"},
        {"id":3,"video_id":"GywvhIV8lAw","title":"Nothing To Say","category":"Industrial"},
        {"id":4,"video_id":"rbmYURg0wgI","title":"Zlotech","category":"Dubstep"},
        {"id":5,"video_id":"Xk2ms0QJWZA","title":"The Craving","category":"Industrial"},
        {"id":6,"video_id":"FvLSd7QCPuE","title":"Zulhente Shakaranti","category":"Industrial"},
        {"id":7,"video_id":"tUV4NCINlig","title":"English Groove","category":"Industrial"},
        {"id":8,"video_id":"8CFk5S1oYHU","title":"Shelaquatsi","category":"Melodic"},
        {"id":9,"video_id":"I2lYUv8De_E","title":"Shine","category":"Dubstep"},
        {"id":10,"video_id":"kwQfBuMswrc","title":"Tululu?","category":"Dubstep"},
        {"id":11,"video_id":"pgoj6CZeju4","title":"Void","category":"Melodic"},
        {"id":12,"video_id":"hrPNqatMN9I","title":"Humility","category":"Melodic"},
        {"id":13,"video_id":"cEuXyHMIL0M","title":"Meaning","category":"Dubstep"},
        {"id":14,"video_id":"6VwlLXE756M","title":"Believe","category":"Industrial"},
        {"id":15,"video_id":"Y9KgbjLtomc","title":"Gateway","category":"Dubstep"},
        {"id":16,"video_id":"1mVyyShRdMU","title":"Balance","category":"Dubstep"},
        {"id":17,"video_id":"rP-LqSft33U","title":"Shtutzen","category":"Industrial"},
        {"id":18,"video_id":"jzfanDVmc_c","title":"Mr. Popstep","category":"Dubstep"},
        {"id":19,"video_id":"dWxXOrDeTgA","title":"Land","category":"Dark"},
        {"id":20,"video_id":"v3hxQDJ2L3s","title":"Collision","category":"Melodic"},
        {"id":21,"video_id":"YfHcrFYmwDs","title":"Before Sunrise","category":"Dubstep"},
        {"id":22,"video_id":"0_TVsMfKrww","title":"24th Of October","category":"Dark"},
        {"id":23,"video_id":"c-YQT2-GW9g","title":"Mitchkon","category":"Dark"},
        {"id":24,"video_id":"dWxXOrDeTgA","title":"A Last Prayer","category":"Melodic"}]          
      }
    },
    created: function () {

    },
    methods: {
      removeDoublesFromArray: function(arrWithDoubles){
          var withoutDoubles = [];
          for(var i = 0; i < arrWithDoubles.length; i++){
              if(!this.inArray(arrWithDoubles[i], withoutDoubles)){
                  withoutDoubles.push(arrWithDoubles[i]);
              }
          }
          return withoutDoubles;
      },
      inArray: function(needle, haystack){
          var count=haystack.length;
          for(var i=0;i<count;i++)
          {
              if(haystack[i]===needle){return true;}
          }
          return false;
      },
      buildArraysByCategory: function(){
          var returnedArrays = {};
          for (var i = 0; i < this.videos.length; i++){
              if(this.hasOwnProperty(returnedArrays, this.videos[i].category)){
                  returnedArrays[this.videos[i].category].push(this.videos[i]);
              } else {
                  returnedArrays[this.videos[i].category] = [];
              }            
          }
          return returnedArrays;
          return ['hello', 'anc'];
      },
      hasOwnProperty: function (obj, prop) {
          var proto = obj.__proto__ || obj.constructor.prototype;
          return (prop in obj) &&
              (!(prop in proto) || proto[prop] !== obj[prop]);
      }  
    }
  }
