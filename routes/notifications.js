const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");
const Notification = require("../models/Notification");
const moment = require("moment");

// Endpoint for sending notifications
// router.get("/upcomingAppointments", async (req, res) => {
//   try {
//     const currentTime = moment();

//     // Find appointments more than 3 hours from current time and not already notified
//     const appointments = await Appointment.find({
//       //   status: "pending", // Assuming 'pending' means not notified
//       createdAt: { $lt: currentTime.add(3, "hours") },
//     });

//     console.log(appointments, "appointments");
//     // Send notifications for these appointments
//     for (const appointment of appointments) {
//       // Send notification logic here (e.g., email, SMS, push notification)

//       // Update appointment status to 'notified'
//       appointment.status = "notified";
//       await appointment.save();

//       // Create a record of notification status
//       await Notification.create({
//         appointmentId: appointment._id,
//         status: "unchecked",
//       });
//     }

//     res.json({ success: true, message: "Notifications sent successfully" });
//   } catch (error) {
//     console.error("Error sending notifications:", error);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

router.get("/upcomingAppointments", async (req, res) => {
  try {
    const currentTime = moment();

    // Find appointments more than 3 hours from current time and not already notified
    const appointments = await Appointment.find({
      createdAt: { $lt: currentTime.add(3, "seconds") },
    });

    console.log(appointments, "appointments");

    // Check if notification already exists for each appointment
    for (const appointment of appointments) {
      const existingNotification = await Notification.findOne({
        appointmentId: appointment._id,
      });
      if (!existingNotification) {
        // Send notification logic here (e.g., email, SMS, push notification)

        // Update appointment status to 'notified'
        appointment.status = "notified";
        await appointment.save();

        // Create a record of notification status
        await Notification.create({
          appointmentId: appointment._id,
          status: "unchecked",
        });
      }
    }

    res.json({ success: true, message: "Notifications sent successfully" });
  } catch (error) {
    console.error("Error sending notifications:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// get all unchecked notifications

// router.get("/send-notifications", async (req, res) => {
//   try {
//     // Find all unchecked notifications
//     const notifications = await Notification.find({
//       status: "unchecked",
//     }).populate({
//       path: "appointmentId",
//       populate: {
//         path: "patientId",
//         model: "User",
//         select: "patientName", // Only select patientName field from the User model
//       },
//     });

//     // Extract necessary data from populated notifications
//     const formattedNotifications = notifications.map((notification) => {
//       const appointment = notification.appointmentId;
//       const patient = appointment.patientId;
//       return {
//         appointmentId: appointment._id,
//         patientId: patient._id,
//         patientName: patient.patientName, // Assuming patientName field in the User model
//         appointmentCreatedAt: appointment.createdAt.toISOString(), // Convert Date object to string
//       };
//     });

//     res.json(formattedNotifications);
//   } catch (error) {
//     console.error("Error sending notifications:", error);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

router.get("/send-notifications", async (req, res) => {
  try {
    // Find all unchecked notifications
    const notifications = await Notification.find().populate({
      path: "appointmentId",
      populate: {
        path: "patientId",
        model: "User",
        select: "patientName",
      },
    });

    // Extract necessary data from populated notifications
    const formattedNotifications = notifications.map((notification) => {
      const appointment = notification.appointmentId;
      const patient = appointment.patientId;
      return {
        notificationId: notification._id,
        appointmentId: appointment._id,
        patientId: patient._id,
        patientName: patient.patientName,
        appointmentCreatedAt: appointment.createdAt.toISOString(),
      };
    });

    res.json(formattedNotifications);
  } catch (error) {
    console.error("Error sending notifications:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// changing notification status

router.put("/check-notiications/:id", async (req, res) => {
  try {
    const notification = await Notification.findOne({ _id: req.params.id });

    if (!notification) {
      return res.status(500).send({ message: "Notification not found" });
    }
    notification.status = "checked";
    await notification.save();

    res.status(200).json("Notification marked as checked");
  } catch (error) {
    console.error("Error sending notification:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// delete old notifications which are more than three hours long and have status as checked
router.delete("/delete-old-checked-notifications", async (req, res) => {
  try {
    // Calculate the time threshold for three hours ago
    const threeHoursAgo = moment().subtract(3, "hours");

    // Query notifications with status "checked" and older than three hours
    const notificationsToDelete = await Notification.find({
      status: "checked",
      createdAt: { $lt: threeHoursAgo },
    });

    // Delete the selected notifications
    await Notification.deleteMany({
      _id: {
        $in: notificationsToDelete.map((notification) => notification._id),
      },
    });

    res.json({
      success: true,
      message: "Old checked notifications deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting old checked notifications:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
