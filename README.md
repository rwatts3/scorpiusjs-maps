[![Stories in Ready](https://badge.waffle.io/rwatts3/orionjs-maps.png?label=ready&title=Ready)](https://waffle.io/rwatts3/orionjs-maps)
Maps For Orion
==========

Maps for Orion is an extension that allows you to add an orion attribute to your entity.

By : Ryan Watts.

## Getting Started

```sh
meteor add rwatts:orion-maps
```
## Examples

Adding to the entity.

```js
  location: orion.attribute('map' , {
    label : 'Location',
    optional: true,
    autoform: {
        afFieldInput: {
          type: 'map' ,
          searchBox: true,
          autolocate: true
      }  
    }
  }),
```

![alt tag](https://raw.githubusercontent.com/rwatts3/orionjs-maps/master/readme/map-example.png)

