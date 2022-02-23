import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../89d3e0e7-b9cd-406e-bd95-8abba3b37cc6/src/item"
import Script2 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script3 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const redButton = new Entity('redButton')
engine.addEntity(redButton)
redButton.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
redButton.addComponentOrReplace(transform3)

const artworkInfo = new Entity('artworkInfo')
engine.addEntity(artworkInfo)
artworkInfo.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(13, 1, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.25, 6.75, 1)
})
artworkInfo.addComponentOrReplace(transform4)
const gltfShape2 = new GLTFShape("4f654415-1940-4c50-b53c-b730a77e74ec/ArtworkInfo_SmartItem.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
artworkInfo.addComponentOrReplace(gltfShape2)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(5.5, 0, 15.5),
  rotation: new Quaternion(-3.693937364513842e-15, -0.9998536109924316, 1.1919182441033627e-7, -0.017110824584960938),
  scale: new Vector3(4.375000476837158, 4.5, 0.9999999403953552)
})
nftPictureFrame.addComponentOrReplace(transform5)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(12, 0, 15.5),
  rotation: new Quaternion(-3.693937364513842e-15, -0.9998536109924316, 1.1919182441033627e-7, -0.017110824584960938),
  scale: new Vector3(4.375000476837158, 4.5, 0.9999999403953552)
})
nftPictureFrame2.addComponentOrReplace(transform6)

const artworkInfo2 = new Entity('artworkInfo2')
engine.addEntity(artworkInfo2)
artworkInfo2.setParent(_scene)
artworkInfo2.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(7, 1, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.25, 6.75, 1)
})
artworkInfo2.addComponentOrReplace(transform7)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(12, 3.5, 15.5),
  rotation: new Quaternion(-3.693937364513842e-15, -0.9998536109924316, 1.1919182441033627e-7, -0.017110824584960938),
  scale: new Vector3(4.375000476837158, 4.5, 0.9999999403953552)
})
nftPictureFrame3.addComponentOrReplace(transform8)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(5.5, 3.5, 15.5),
  rotation: new Quaternion(-3.693937364513842e-15, -0.9998536109924316, 1.1919182441033627e-7, -0.017110824584960938),
  scale: new Vector3(4.375000476837158, 4.5, 0.9999999403953552)
})
nftPictureFrame4.addComponentOrReplace(transform9)

const artworkInfo3 = new Entity('artworkInfo3')
engine.addEntity(artworkInfo3)
artworkInfo3.setParent(_scene)
artworkInfo3.addComponentOrReplace(gltfShape2)
const transform10 = new Transform({
  position: new Vector3(13, 4.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.25, 6.75, 1)
})
artworkInfo3.addComponentOrReplace(transform10)

const artworkInfo4 = new Entity('artworkInfo4')
engine.addEntity(artworkInfo4)
artworkInfo4.setParent(_scene)
artworkInfo4.addComponentOrReplace(gltfShape2)
const transform11 = new Transform({
  position: new Vector3(7, 4.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.25, 6.75, 1)
})
artworkInfo4.addComponentOrReplace(transform11)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(14.817744255065918, 7.5, 7.592156410217285),
  rotation: new Quaternion(2.8420420246258286e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(6.62819242477417, 7.06497859954834, 1.1141855716705322)
})
plainText.addComponentOrReplace(transform12)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
script1.init(options)
script2.init(options)
script3.init(options)
script1.spawn(redButton, {}, createChannel(channelId, redButton, channelBus))
script2.spawn(nftPictureFrame, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script2.spawn(nftPictureFrame2, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script2.spawn(nftPictureFrame3, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script2.spawn(nftPictureFrame4, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script3.spawn(plainText, {"text":"PARTY inc.","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText, channelBus))